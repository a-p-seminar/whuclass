import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ContentValidationError, serializeCourseContent } from './course-content.mjs';
import { GitHubConflictError, GitHubError, isBlobSha } from './github-store.mjs';
import { isVisiblePath, serveStaticFile } from './static-files.mjs';

const defaultRoot = fileURLToPath(new URL('../', import.meta.url));
const sessionName = 'course_admin_session';
const sessionSeconds = 8 * 60 * 60;
const maxSessions = 128;
const maxLoginFailures = 5;
const failureWindow = 60_000;
const maxPasswordBytes = 1_024;
const maxLoginBody = 8_192;
const maxSaveBody = 1_048_576;
const apiMethods = new Map([
  ['/admin/api/login', ['POST']],
  ['/admin/api/logout', ['POST']],
  ['/admin/api/content', ['GET', 'PUT']],
]);

class RequestError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function digest(value) {
  return createHash('sha256').update(value).digest();
}

function cookieKey(request) {
  const cookies = (request.headers.cookie ?? '').split(';');
  const session = cookies.find((cookie) => cookie.trimStart().startsWith(`${sessionName}=`));
  const token = session?.trim().slice(sessionName.length + 1);
  return /^[A-Za-z0-9_-]{43}$/.test(token ?? '') ? digest(token).toString('hex') : undefined;
}

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify(body));
}

function requestPath(request) {
  let pathname;
  try {
    pathname = decodeURIComponent((request.url ?? '').split('?')[0]);
  } catch {
    throw new RequestError(400, 'The request path is invalid.');
  }
  if (!pathname.startsWith('/') || pathname.startsWith('//') || !isVisiblePath(pathname)) {
    throw new RequestError(404, 'The requested page was not found.');
  }
  return pathname;
}

function browserOrigin(request, remoteOrigin) {
  const host = request.headers.host?.toLowerCase();
  const port = request.socket.localPort;
  const local = host === `127.0.0.1:${port}` || host === `localhost:${port}`;
  if (!host || (!local && host !== remoteOrigin?.host)) {
    throw new RequestError(403, 'Open the course site at its configured address.');
  }
  return remoteOrigin?.origin ?? `http://${host}`;
}

function securityHeaders(response, admin) {
  const styles = admin ? "'self'" : "'self' 'unsafe-inline'";
  const frame = admin ? "'none'" : "'self'";
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Security-Policy', `default-src 'none'; script-src 'self'; style-src ${styles}; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors ${frame}`);
  response.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  response.setHeader('Referrer-Policy', 'no-referrer');
  response.setHeader('X-Content-Type-Options', 'nosniff');
}

function checkMutation(request, origin) {
  const fetchSite = request.headers['sec-fetch-site'];
  if (request.headers.origin !== origin || (fetchSite && fetchSite !== 'same-origin')) {
    throw new RequestError(403, 'Submit the request from the course admin page.');
  }
  const mediaType = request.headers['content-type']?.split(';')[0].trim().toLowerCase();
  if (mediaType !== 'application/json') throw new RequestError(415, 'Send the request as JSON.');
}

async function readJson(request, limit, keys) {
  const tooLarge = () => new RequestError(413, 'The request is too large.');
  if (Number(request.headers['content-length']) > limit) throw tooLarge();

  const chunks = [];
  let length = 0;
  for await (const chunk of request.iterator({ destroyOnReturn: false })) {
    length += chunk.length;
    if (length > limit) throw tooLarge();
    chunks.push(chunk);
  }

  let parsed;
  try {
    const json = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks, length));
    parsed = JSON.parse(json);
  } catch {
    throw new RequestError(400, 'Send a valid JSON request.');
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)
      || Object.keys(parsed).length !== keys.length || !keys.every((key) => Object.hasOwn(parsed, key))) {
    throw new RequestError(400, 'The JSON request has unexpected or missing fields.');
  }
  return parsed;
}

function requireMethod(request, response, allowed) {
  if (!allowed.includes(request.method)) {
    response.setHeader('Allow', allowed.join(', '));
    throw new RequestError(405, 'This request method is unsupported.');
  }
}

function sendError(request, response, error) {
  if (response.destroyed) return;
  if (response.headersSent) {
    response.destroy();
    return;
  }
  if (!request.complete || error?.status === 413) response.setHeader('Connection', 'close');
  if (error instanceof RequestError) return sendJson(response, error.status, { message: error.message });
  if (error instanceof ContentValidationError) return sendJson(response, 400, { message: error.message });
  if (error instanceof GitHubConflictError) return sendJson(response, 409, { message: error.message });
  if (error instanceof GitHubError) return sendJson(response, 502, { message: error.message });
  sendJson(response, 500, { message: 'The course server could not process the request.' });
}

export function createAdminServer({ password, store, origin, projectRoot = defaultRoot }) {
  if (typeof password !== 'string' || !password || Buffer.byteLength(password) > maxPasswordBytes) {
    throw new Error('Set ADMIN_PASSWORD to a nonempty password of at most 1024 bytes.');
  }
  const remoteOrigin = origin ? new URL(origin) : undefined;
  if (remoteOrigin && (remoteOrigin.protocol !== 'https:' || origin !== remoteOrigin.origin)) {
    throw new Error('The remote admin origin must be an HTTPS origin.');
  }
  const passwordHash = digest(password);
  const sessions = new Map();
  const failures = [];

  function setCookie(response, token, maxAge) {
    const secure = remoteOrigin ? '; Secure' : '';
    response.setHeader('Set-Cookie', `${sessionName}=${token}; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`);
  }

  async function login(request, response) {
    const { password: candidate } = await readJson(request, maxLoginBody, ['password']);
    const now = Date.now();
    while (failures.length && now - failures[0] >= failureWindow) failures.shift();
    if (failures.length >= maxLoginFailures) {
      response.setHeader('Retry-After', Math.ceil((failures[0] + failureWindow - now) / 1_000));
      throw new RequestError(429, 'Too many attempts. Wait a minute before trying again.');
    }
    if (typeof candidate !== 'string' || !timingSafeEqual(digest(candidate), passwordHash)) {
      failures.push(now);
      throw new RequestError(401, 'The password is incorrect.');
    }

    failures.length = 0;
    sessions.delete(cookieKey(request));
    for (const [key, expires] of sessions) {
      if (expires <= now) sessions.delete(key);
    }
    if (sessions.size >= maxSessions) sessions.delete(sessions.keys().next().value);

    const token = randomBytes(32).toString('base64url');
    sessions.set(digest(token).toString('hex'), now + sessionSeconds * 1_000);
    setCookie(response, token, sessionSeconds);
    response.writeHead(204).end();
  }

  async function handleApi(request, response, pathname, requestOrigin) {
    const allowed = apiMethods.get(pathname);
    if (!allowed) throw new RequestError(404, 'The requested API endpoint was not found.');
    requireMethod(request, response, allowed);
    if (request.method !== 'GET') checkMutation(request, requestOrigin);
    if (pathname === '/admin/api/login') return login(request, response);

    const key = cookieKey(request);
    if ((sessions.get(key) ?? 0) <= Date.now()) {
      sessions.delete(key);
      throw new RequestError(401, 'Sign in to edit course content.');
    }
    if (pathname === '/admin/api/logout') {
      await readJson(request, maxLoginBody, []);
      sessions.delete(key);
      setCookie(response, '', 0);
      response.writeHead(204).end();
      return;
    }

    if (request.method === 'GET') {
      const { content, sha } = await store.read();
      sendJson(response, 200, { content, sha, repository: store.repository, branch: store.branch });
      return;
    }
    const { content, sha } = await readJson(request, maxSaveBody, ['content', 'sha']);
    if (!isBlobSha(sha)) throw new RequestError(400, 'A valid course revision is required.');
    const saved = await store.write(content, sha);
    sendJson(response, 200, { sha: saved.sha, commit: saved.commit, commitUrl: saved.commitUrl });
  }

  async function handle(request, response) {
    const pathname = requestPath(request);
    const admin = pathname === '/admin' || pathname.startsWith('/admin/');
    securityHeaders(response, admin);
    const requestOrigin = browserOrigin(request, remoteOrigin);
    if (pathname === '/admin/api' || pathname.startsWith('/admin/api/')) {
      await handleApi(request, response, pathname, requestOrigin);
      return;
    }

    requireMethod(request, response, ['GET', 'HEAD']);
    if (pathname === '/admin') {
      response.writeHead(308, { Location: '/admin/' }).end();
      return;
    }
    if (pathname === '/course-content.js') {
      const { content } = await store.read();
      const source = serializeCourseContent(content);
      response.writeHead(200, {
        'Content-Type': 'text/javascript; charset=utf-8',
        'Content-Length': Buffer.byteLength(source),
      }).end(request.method === 'HEAD' ? undefined : source);
      return;
    }

    const root = join(projectRoot, admin ? 'admin' : 'docs');
    const path = pathname.slice(admin ? '/admin/'.length : 1) || 'index.html';
    if (!await serveStaticFile(root, path, request, response)) {
      throw new RequestError(404, 'The requested page was not found.');
    }
  }

  return createServer({ headersTimeout: 10_000, requestTimeout: 20_000, maxHeaderSize: 16_384 }, async (request, response) => {
    try {
      await handle(request, response);
    } catch (error) {
      sendError(request, response, error);
    }
  });
}

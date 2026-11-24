import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { mkdir, mkdtemp, rmdir, unlink, writeFile } from 'node:fs/promises';
import { once } from 'node:events';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { createAdminServer } from './admin-server.mjs';
import { parseCourseContent, serializeCourseContent } from './course-content.mjs';
import { createGitHubStore, GitHubConflictError } from './github-store.mjs';

const initialSha = 'a'.repeat(40);
const nextSha = 'b'.repeat(40);
const commit = 'c'.repeat(40);
const pair = ['Functions', '函数'];

function exampleContent() {
  return {
    overview: { title: pair, affiliation: pair, intro: pair, preparation: pair },
    course: {
      modules: [{ id: 'foundations', title: pair }, { id: 'integrals', title: pair }],
      materials: [{ id: 'graphs', module: 'foundations', title: pair, description: ['', ''], exerciseChapter: 1 },
        { id: 'area', module: 'integrals', title: pair, file: '课堂讲义 1.pdf' }],
      textbooks: [{ id: 'calculus', title: pair, authors: 'A. Author', edition: pair, url: 'https://example.test/notes.pdf' }],
      team: [{ name: pair, role: 'lead' }],
    },
    syllabus: {
      information: [{ label: pair, value: pair }],
      outcomes: [pair],
      content: { foundations: { topics: pair, reading: '' } },
      teaching: [pair],
    },
    lessonPlans: {
      graphs: {
        objectives: [pair], focus: pair, preparation: pair, steps: [{ title: pair, detail: pair }],
        check: pair, expected: pair, followUp: pair,
      },
    },
    exercises: [{ chapter: 1, title: pair, items: [{
      section: '1.1', question: [String.raw`Find \(x^2\).`, String.raw`求 \(x^2\)。`], answer: pair,
    }] }],
  };
}

test('course content round-trips bilingual text and formulas in a plain JSON wrapper', () => {
  const content = exampleContent();
  const file = serializeCourseContent(content);
  assert.equal(file, `const courseContent = ${JSON.stringify(content, null, 2)};\n`);
  assert.deepEqual(parseCourseContent(file), content);
  assert.throws(() => parseCourseContent(`${file}// extra JavaScript\n`), /course content/i);
});

test('the snapshot rejects invalid references, unsupported links, and missing translations', () => {
  const cases = [
    [(content) => { content.course.materials[0].module = 'missing'; }, /module/i],
    [(content) => { content.course.materials[0].exerciseChapter = 2; }, /exerciseChapter/i],
    [(content) => { content.course.modules[1].id = 'foundations'; }, /duplicate/i],
    [(content) => { content.course.materials[1].file = 'nested/notes.pdf'; }, /filename/i],
    [(content) => { content.course.textbooks[0].url = 'http://example.test/notes.pdf'; }, /HTTPS/i],
    [(content) => { content.overview.title = ['Functions', '']; }, /overview.title/i],
  ];
  for (const [change, error] of cases) {
    const content = exampleContent();
    change(content);
    assert.throws(() => serializeCourseContent(content), error);
  }
});

function fakeGitHub() {
  const repository = 'example/course';
  const branch = 'release/course';
  const token = randomBytes(24).toString('hex');
  const requests = [];
  let state = { content: exampleContent(), sha: initialSha };
  let conflictOnNextPut = false;
  const store = createGitHubStore({ repository, branch, token, async fetchImpl(url, options) {
    const target = new URL(url);
    assert.equal(target.origin, 'https://api.github.com');
    assert.equal(target.pathname, `/repos/${repository}/contents/docs/course-content.js`);
    assert.equal(options.redirect, 'error');
    assert.ok(options.headers.Authorization === `Bearer ${token}`, 'GitHub request uses the server credential');
    requests.push(options.method);
    if (options.method === 'GET') {
      assert.equal(target.searchParams.get('ref'), branch);
      return Response.json({
        type: 'file', encoding: 'base64', sha: state.sha,
        content: Buffer.from(serializeCourseContent(state.content)).toString('base64'),
      });
    }
    assert.equal(options.method, 'PUT');
    const body = JSON.parse(options.body);
    assert.equal(body.branch, branch);
    assert.equal(body.sha, state.sha);
    if (conflictOnNextPut) return Response.json({}, { status: 409 });

    const source = Buffer.from(body.content, 'base64').toString('utf8');
    const uploaded = parseCourseContent(source);
    assert.equal(source, serializeCourseContent(uploaded));
    state = { sha: nextSha, content: uploaded };
    return Response.json({ content: { sha: nextSha }, commit: { sha: commit } });
  } });
  return { store, requests, causeConflict() { conflictOnNextPut = true; } };
}

async function startServer(t, options = {}) {
  const github = fakeGitHub();
  const password = randomBytes(24).toString('hex');
  const server = createAdminServer({ password, store: github.store, ...options });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const origin = options.origin ?? base;
  const send = (path, { method = 'GET', body, cookie, headers = {} } = {}) => fetch(`${base}${path}`, {
    method,
    headers: {
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    redirect: 'manual',
  });
  const login = (headers) => send('/admin/api/login', { method: 'POST', body: { password }, headers });
  return { send, login, requests: github.requests, causeConflict: github.causeConflict };
}

test('login, a validated GitHub save, live preview, and logout use a scoped session', async (t) => {
  const { send, login, requests } = await startServer(t);
  const contentPath = '/admin/api/content';
  assert.equal((await send(contentPath)).status, 401);
  assert.deepEqual(requests, []);

  const loggedIn = await login();
  assert.equal(loggedIn.status, 204);
  const setCookie = loggedIn.headers.get('set-cookie');
  assert.match(setCookie, /; HttpOnly\b/);
  assert.match(setCookie, /; SameSite=Strict\b/);
  assert.match(setCookie, /; Path=\/admin\b/);
  assert.doesNotMatch(setCookie, /; Secure\b/);
  const cookie = setCookie.split(';')[0];

  const snapshot = await send(contentPath, { cookie });
  assert.equal(snapshot.status, 200);
  const { content, sha, repository, branch } = await snapshot.json();
  assert.equal(sha, initialSha);
  assert.equal(repository, 'example/course');
  assert.equal(branch, 'release/course');
  content.overview.title = ['Advanced Mathematics', '高等数学'];

  const save = await send(contentPath, { method: 'PUT', cookie, body: { content, sha } });
  assert.equal(save.status, 200);
  assert.deepEqual(await save.json(), {
    sha: nextSha, commit, commitUrl: `https://github.com/${repository}/commit/${commit}`,
  });
  const preview = await send('/course-content.js');
  assert.equal(preview.status, 200);
  assert.match(preview.headers.get('content-type'), /javascript/);
  assert.equal(preview.headers.get('cache-control'), 'no-store');
  assert.deepEqual(parseCourseContent(await preview.text()), content);

  const stale = await send(contentPath, { method: 'PUT', cookie, body: { content, sha } });
  assert.equal(stale.status, 409);
  assert.equal(requests.filter((method) => method === 'PUT').length, 1);

  const logout = await send('/admin/api/logout', { method: 'POST', cookie, body: {} });
  assert.equal(logout.status, 204);
  assert.match(logout.headers.get('set-cookie'), /; Max-Age=0\b/);
  assert.equal((await send(contentPath, { cookie })).status, 401);
});

test('validation and an upstream conflict stop an admin save', async (t) => {
  const { send, login, requests, causeConflict } = await startServer(t);
  const cookie = (await login()).headers.get('set-cookie').split(';')[0];
  const content = exampleContent();
  content.course.materials[0].module = 'missing';
  const invalid = await send('/admin/api/content', { method: 'PUT', cookie, body: { content, sha: initialSha } });
  assert.equal(invalid.status, 400);
  assert.match((await invalid.json()).message, /module/i);
  assert.deepEqual(requests, []);

  causeConflict();
  const conflict = await send('/admin/api/content', {
    method: 'PUT', cookie, body: { content: exampleContent(), sha: initialSha },
  });
  assert.equal(conflict.status, 409);
  assert.deepEqual(requests, ['GET', 'PUT']);
});

test('a newer blob is rejected even when it was edited outside the course editor', async () => {
  const requests = [];
  const store = createGitHubStore({
    repository: 'example/course',
    token: randomBytes(24).toString('hex'),
    async fetchImpl(_url, options) {
      requests.push(options.method);
      return Response.json({
        type: 'file', sha: nextSha, encoding: 'base64',
        content: Buffer.from('Unrecognized snapshot').toString('base64'),
      });
    },
  });
  await assert.rejects(store.write(exampleContent(), initialSha), GitHubConflictError);
  assert.deepEqual(requests, ['GET']);
});

test('login enforces the serving origin, JSON type, and rate limit', async (t) => {
  const { send, login } = await startServer(t);
  assert.equal((await login({ Origin: 'https://example.test' })).status, 403);
  assert.equal((await login({ 'Content-Type': 'text/plain' })).status, 415);
  const wrongPassword = randomBytes(24).toString('hex');
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await send('/admin/api/login', { method: 'POST', body: { password: wrongPassword } });
    assert.equal(response.status, 401);
  }
  const blocked = await login();
  assert.equal(blocked.status, 429);
  assert.ok(Number(blocked.headers.get('retry-after')) > 0);
});

test('the forwarded HTTPS origin receives a Secure session cookie', async (t) => {
  const { login } = await startServer(t, { origin: 'https://course-preview.example.test' });
  const response = await login();
  assert.equal(response.status, 204);
  assert.match(response.headers.get('set-cookie'), /; Secure\b/);
});

test('static roots stay separate and course PDFs support byte ranges', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'whu-admin-test-'));
  await mkdir(join(root, 'docs'));
  await mkdir(join(root, 'admin'));
  const files = [['docs/index.html', 'course'], ['admin/index.html', 'admin'],
    ['docs/handout.pdf', '0123456789'], ['admin/editor.js', 'const page = "admin";'], ['.env', '']];
  for (const [name, body] of files) await writeFile(join(root, name), body);
  t.after(async () => {
    for (const [name] of files) await unlink(join(root, name));
    await rmdir(join(root, 'docs'));
    await rmdir(join(root, 'admin'));
    await rmdir(root);
  });

  const { send } = await startServer(t, { projectRoot: root });
  assert.equal(await (await send('/')).text(), 'course');
  assert.equal((await send('/admin')).headers.get('location'), '/admin/');
  const admin = await send('/admin/');
  assert.equal(await admin.text(), 'admin');
  assert.match(admin.headers.get('content-security-policy'), /script-src 'self'/);
  assert.equal((await send('/admin/editor.js')).status, 200);
  assert.equal((await send('/editor.js')).status, 404);
  assert.equal((await send('/.env')).status, 404);
  const range = await send('/handout.pdf', { headers: { Range: 'bytes=2-4' } });
  assert.equal(range.status, 206);
  assert.equal(range.headers.get('content-range'), 'bytes 2-4/10');
  assert.equal(await range.text(), '234');
});

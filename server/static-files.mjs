import { createReadStream } from 'node:fs';
import { realpath, stat } from 'node:fs/promises';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { pipeline } from 'node:stream/promises';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
};

export function isVisiblePath(path) {
  return !path.split('/').some((segment) => segment.startsWith('.') || /[. ]$/.test(segment))
    && !/[\\:\x00-\x1f\x7f]/.test(path);
}

function within(root, path) {
  const location = relative(root, path);
  return location && !isAbsolute(location) && location !== '..' && !location.startsWith(`..${sep}`);
}

async function openStaticPath(root, path) {
  try {
    const rootPath = await realpath(root);
    const requested = resolve(rootPath, path);
    if (!within(rootPath, requested)) return null;

    const actual = await realpath(requested);
    if (!within(rootPath, actual) || !isVisiblePath(relative(rootPath, actual).split(sep).join('/'))) {
      return null;
    }
    const entry = await stat(actual);
    return entry.isFile() ? { actual, size: entry.size } : null;
  } catch (error) {
    if (['ENOENT', 'ENOTDIR', 'EPERM', 'EACCES', 'EINVAL'].includes(error.code)) return null;
    throw error;
  }
}

function readRange(value, size) {
  const range = /^bytes=(\d*)-(\d*)$/.exec(value ?? '');
  if (!range || (!range[1] && !range[2])) return null;

  const [, first, last] = range;
  const start = first ? Number(first) : Math.max(size - Number(last), 0);
  const end = first && last ? Math.min(Number(last), size - 1) : size - 1;
  return { start, end, satisfiable: start <= end };
}

export async function serveStaticFile(root, path, request, response) {
  const extension = extname(path).toLowerCase();
  const type = mimeTypes[extension];
  if (!type) return false;

  const file = await openStaticPath(root, path);
  if (!file) return false;
  const { actual, size } = file;
  const range = request.method === 'GET' && !request.headers['if-range']
    ? readRange(request.headers.range, size) : null;

  response.setHeader('Content-Type', type);
  response.setHeader('Accept-Ranges', 'bytes');
  if (extension === '.ppt' || extension === '.pptx') response.setHeader('Content-Disposition', 'attachment');
  if (range && !range.satisfiable) {
    response.writeHead(416, { 'Content-Range': `bytes */${size}` }).end();
    return true;
  }

  if (range) {
    response.setHeader('Content-Range', `bytes ${range.start}-${range.end}/${size}`);
    response.setHeader('Content-Length', range.end - range.start + 1);
  } else {
    response.setHeader('Content-Length', size);
  }
  response.writeHead(range ? 206 : 200);
  if (request.method === 'HEAD' || size === 0) {
    response.end();
  } else {
    const readOptions = range ? { start: range.start, end: range.end } : {};
    await pipeline(createReadStream(actual, readOptions), response);
  }
  return true;
}

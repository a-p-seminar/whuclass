import { createAdminServer } from './admin-server.mjs';
import { createGitHubStore } from './github-store.mjs';

function loadPort(value = '8788') {
  const port = Number(value);
  if (!/^\d+$/.test(value) || port < 1 || port > 65_535) throw new Error('Set PORT to a valid TCP port number.');
  return port;
}

function codespaceOrigin(port) {
  const name = process.env.CODESPACE_NAME ?? '';
  const domain = process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || 'app.github.dev';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || !/^[a-z0-9]+(?:[.-][a-z0-9]+)+$/.test(domain)) {
    throw new Error('The Codespaces forwarding hostname is missing or invalid.');
  }
  return `https://${name}-${port}.${domain}`;
}

function start() {
  if (Number(process.versions.node.split('.')[0]) < 22) throw new Error('Use Node.js 22 or newer.');
  const port = loadPort(process.env.PORT);
  const codespaces = process.env.CODESPACES === 'true';
  const origin = codespaces ? codespaceOrigin(port) : undefined;
  const store = createGitHubStore({
    repository: process.env.GITHUB_REPOSITORY,
    branch: process.env.GITHUB_BRANCH,
    token: process.env.GITHUB_TOKEN,
  });
  const server = createAdminServer({ password: process.env.ADMIN_PASSWORD, store, origin });
  server.on('error', (error) => {
    const message = error.code === 'EADDRINUSE' ? 'The configured port is already in use.' : 'The course server could not start.';
    console.error(message);
    process.exitCode = 1;
  });
  server.listen(port, codespaces ? '0.0.0.0' : '127.0.0.1', () => {
    const address = origin ?? `http://127.0.0.1:${port}`;
    console.log(`Course preview  ${address}/`);
    console.log(`Course admin    ${address}/admin/`);
  });
}

try {
  start();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

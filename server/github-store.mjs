import { ContentValidationError, parseCourseContent, serializeCourseContent } from './course-content.mjs';

export class GitHubError extends Error {}
export class GitHubConflictError extends Error {}

export function isBlobSha(value) {
  return typeof value === 'string' && /^[a-f0-9]{40}$/.test(value);
}

const conflictMessage = 'The course changed on GitHub. Reload the latest version before saving again.';

export function createGitHubStore({ repository, branch = 'main', token, fetchImpl = fetch }) {
  const coordinates = /^([a-z\d][a-z\d-]*)\/([a-z\d._-]+)$/i.exec(repository ?? '');
  if (!coordinates || ['.', '..'].includes(coordinates[2])) {
    throw new Error('Set GITHUB_REPOSITORY to the GitHub owner and repository name.');
  }
  if (typeof branch !== 'string' || !/^[^\s\x00-\x1f\x7f]{1,255}$/.test(branch)) {
    throw new Error('Set GITHUB_BRANCH to a valid branch name.');
  }
  if (typeof token !== 'string' || !/^[^\s\x00-\x1f\x7f]+$/.test(token)) {
    throw new Error('Set GITHUB_TOKEN to a repository token with contents access.');
  }

  const endpoint = `https://api.github.com/repos/${repository}/contents/docs/course-content.js`;
  const readEndpoint = new URL(endpoint);
  readEndpoint.searchParams.set('ref', branch);
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  };

  async function request(url, body) {
    const method = body === undefined ? 'GET' : 'PUT';
    try {
      return await fetchImpl(url, {
        method,
        headers: body === undefined ? headers : { ...headers, 'Content-Type': 'application/json' },
        body: body === undefined ? undefined : JSON.stringify(body),
        redirect: 'error',
        signal: AbortSignal.timeout(15_000),
      });
    } catch {
      const message = method === 'PUT'
        ? 'GitHub did not confirm the save. Reload the latest content before retrying.'
        : 'The course server could not reach GitHub.';
      throw new GitHubError(message);
    }
  }

  async function readBlob() {
    const response = await request(readEndpoint.href);
    const data = await readResponse(response);
    if (data?.type !== 'file' || !isBlobSha(data.sha)) {
      throw new GitHubError('GitHub did not return a revision for the configured course file.');
    }
    return data;
  }

  async function read() {
    const data = await readBlob();
    try {
      if (data.encoding !== 'base64' || typeof data.content !== 'string') throw new Error();
      const bytes = Buffer.from(data.content, 'base64');
      const source = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      return { content: parseCourseContent(source), sha: data.sha };
    } catch {
      throw new GitHubError('The GitHub course content file could not be read as a valid course snapshot.');
    }
  }

  async function write(content, sha) {
    if (!isBlobSha(sha)) throw new ContentValidationError('A valid course revision is required.');
    const source = serializeCourseContent(content);
    if ((await readBlob()).sha !== sha) throw new GitHubConflictError(conflictMessage);

    const response = await request(endpoint, {
      message: 'Update Advanced Mathematics course content',
      content: Buffer.from(source).toString('base64'),
      sha,
      branch,
    });

    if (response.status === 409) {
      await discard(response);
      throw new GitHubConflictError(conflictMessage);
    }
    if (response.status === 422) {
      await discard(response);
      if ((await readBlob()).sha !== sha) throw new GitHubConflictError(conflictMessage);
    }

    const data = await readResponse(response, true);
    if (!isBlobSha(data?.content?.sha) || !isBlobSha(data?.commit?.sha)) {
      throw new GitHubError('GitHub did not confirm the save. Reload the latest content before retrying.');
    }

    const commit = data.commit.sha;
    return { sha: data.content.sha, commit, commitUrl: `https://github.com/${repository}/commit/${commit}` };
  }

  return { repository, branch, read, write };
}

async function discard(response) {
  await response.body?.cancel().catch(() => {});
}

async function readResponse(response, saving = false) {
  if (!response.ok) {
    await discard(response);
    if (response.status === 404) {
      throw new GitHubError('GitHub could not find the configured course file. Check the repository, branch, and token access.');
    }
    if (response.status === 401 || response.status === 403) {
      throw new GitHubError('GitHub refused access. Check repository token permissions and branch rules.');
    }
    throw new GitHubError(saving ? 'GitHub rejected the save. Check repository permissions and branch rules.'
      : 'GitHub could not return the configured course file.');
  }
  try {
    return await response.json();
  } catch {
    throw new GitHubError(saving ? 'GitHub did not confirm the save. Reload the latest content before retrying.'
      : 'GitHub returned an unreadable response.');
  }
}

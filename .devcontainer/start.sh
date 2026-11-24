#!/usr/bin/env bash
set -eu

if [[ -z "${ADMIN_PASSWORD:-}" ]]; then
  printf '%s\n' 'Set the ADMIN_PASSWORD Codespaces secret, then restart the codespace.' >&2
  exit 0
fi

if curl --fail --silent --max-time 2 --output /dev/null http://127.0.0.1:8788/admin/; then
  exit 0
fi

export GITHUB_REPOSITORY="${GITHUB_REPOSITORY:-a-p-seminar/whuclass}"
nohup node server/start.mjs > "${TMPDIR:-/tmp}/whu-course-server.log" 2>&1 < /dev/null &

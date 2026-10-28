#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "EEUN COMMAND // Forensic Suite → http://localhost:8000"
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server 8000
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l 8000 .
else
  echo "ERROR: python3 or npx required to serve locally." >&2
  exit 1
fi

#!/bin/bash
set -e

echo 'node version:'
node -v
echo 'pnpm version:'
pnpm -v

rm -rf dist

# npx patch-package

NODE_OPTIONS=--max-old-space-size=4096 cross-env env=test vite build

echo "Done: Build Preview."

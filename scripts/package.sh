#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
RELEASE_DIR="$ROOT_DIR/release"
ZIP_NAME="bootcamp-helper-$(date +%Y%m%d%H%M%S).zip"

mkdir -p "$RELEASE_DIR"

# Create a temporary staging area to avoid including release/scripts itself
STAGE_DIR=$(mktemp -d)
trap 'rm -rf "$STAGE_DIR"' EXIT

rsync -a --exclude ".git" \
          --exclude "node_modules" \
          --exclude "release" \
          --exclude "scripts" \
          --exclude ".DS_Store" \
          "$ROOT_DIR/" "$STAGE_DIR/"

(cd "$STAGE_DIR" && zip -r "$RELEASE_DIR/$ZIP_NAME" .)

echo "Created $RELEASE_DIR/$ZIP_NAME"

#!/bin/bash
# Download favicon from old WordPress site
# Run from project root: bash scripts/download-favicon.sh

BASE="https://timeoutservice.se/wp-content/uploads/2022/10"

echo "Downloading favicons..."
curl -sL "$BASE/cropped-entypo_drop-32x32.png"   -o "app/favicon.png"
curl -sL "$BASE/cropped-entypo_drop-192x192.png"  -o "app/icon.png"
curl -sL "$BASE/cropped-entypo_drop-180x180.png"  -o "app/apple-icon.png"

echo "Done! Files saved:"
ls -lh app/favicon.png app/icon.png app/apple-icon.png

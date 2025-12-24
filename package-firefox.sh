#!/bin/bash
# Quick Package Script for Firefox XPI

echo "📦 Creating Firefox XPI package..."
echo ""

# Remove old package if exists
if [ -f "../tradingview-wishlist.xpi" ]; then
    rm ../tradingview-wishlist.xpi
    echo "🗑️  Removed old XPI package"
fi

# Create XPI (which is just a ZIP file with .xpi extension)
cd "$(dirname "$0")"
zip -r ../tradingview-wishlist.xpi \
    manifest.json \
    content.js \
    popup.js \
    popup.html \
    styles.css \
    browser-polyfill.js \
    list.txt \
    icon16.png \
    icon48.png \
    icon128.png \
    -x "*.git*" "*.md" "package.sh"

echo ""
if [ -f "../tradingview-wishlist.xpi" ]; then
    echo "✅ XPI package created: ../tradingview-wishlist.xpi"
    echo ""
    echo "To install in Firefox:"
    echo "1. Open Firefox"
    echo "2. Go to about:addons"
    echo "3. Click the gear icon ⚙️"
    echo "4. Select 'Install Add-on From File...'"
    echo "5. Choose tradingview-wishlist.xpi"
    echo ""
    echo "OR for temporary install:"
    echo "1. Go to about:debugging"
    echo "2. Click 'This Firefox'"
    echo "3. Click 'Load Temporary Add-on...'"
    echo "4. Select manifest.json from this folder"
else
    echo "❌ Failed to create XPI package"
    exit 1
fi

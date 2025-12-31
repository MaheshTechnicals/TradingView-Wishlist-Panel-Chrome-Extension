#!/bin/bash
# Package Script for Version 1.2.0

echo "📦 Packaging TradingView Wishlist Panel v1.2.0"
echo ""

# Create dist directory if it doesn't exist
mkdir -p ../dist

# Package for Chrome/Edge/Brave/Opera
echo "Creating Chrome package..."
zip -r ../dist/tradingview-wishlist-v1.2.0-chrome.zip \
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
    README.md \
    CHANGELOG.md \
    -x "*.git*" "*.sh" "*.md~" "*firefox.md*"

echo "✅ Chrome package created: ../dist/tradingview-wishlist-v1.2.0-chrome.zip"

# Package for Firefox
echo ""
echo "Creating Firefox XPI package..."
zip -r ../dist/tradingview-wishlist-v1.2.0-firefox.xpi \
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
    -x "*.git*" "*.sh" "*.md" "*.md~"

echo "✅ Firefox package created: ../dist/tradingview-wishlist-v1.2.0-firefox.xpi"

echo ""
echo "📦 Packaging complete!"
echo ""
echo "Files created in ../dist/:"
ls -lh ../dist/tradingview-wishlist-v1.2.0*
echo ""
echo "Version: 1.2.0"
echo "Date: $(date '+%Y-%m-%d')"
echo ""
echo "📋 Installation Instructions:"
echo ""
echo "Chrome/Edge/Brave/Opera:"
echo "  1. Extract the Chrome zip file"
echo "  2. Go to chrome://extensions/"
echo "  3. Enable Developer Mode"
echo "  4. Click 'Load unpacked'"
echo "  5. Select the extracted folder"
echo ""
echo "Firefox:"
echo "  1. Go to about:debugging"
echo "  2. Click 'This Firefox'"
echo "  3. Click 'Load Temporary Add-on'"
echo "  4. Select the .xpi file"
echo ""
echo "✨ New in v1.2.0:"
echo "  - Dynamic stock list from API"
echo "  - Smart caching (24 hours)"
echo "  - Automatic fallback support"
echo ""

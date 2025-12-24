# 🦊 Firefox Installation Guide

## Installing TradingView Wishlist Panel on Firefox

This extension is fully compatible with both **Chrome** and **Firefox** browsers.

### Method 1: Temporary Installation (For Testing)

1. **Open Firefox Add-ons Debug Page**:
   - Type `about:debugging` in the address bar and press Enter
   - Click "This Firefox" in the left sidebar

2. **Load the Extension**:
   - Click "Load Temporary Add-on..."
   - Navigate to your extension folder
   - Select the `manifest.json` file

3. **Verify Installation**:
   - The extension should appear in the list
   - You'll see "TradingView Wishlist Panel"
   - **Note**: Temporary extensions are removed when Firefox closes

### Method 2: Permanent Installation (Signed Extension)

For permanent installation on Firefox, the extension needs to be signed by Mozilla:

#### Option A: Self-Distribution (Recommended for personal use)

1. **Create a Firefox Account**:
   - Go to [addons.mozilla.org](https://addons.mozilla.org/)
   - Create an account if you don't have one

2. **Submit for Signing**:
   - Go to [Developer Hub](https://addons.mozilla.org/developers/)
   - Click "Submit a New Add-on"
   - Choose "On your own" (self-hosted)
   - Upload a ZIP file of your extension
   - Mozilla will automatically sign it (usually within minutes)

3. **Install the Signed Extension**:
   - Download the signed `.xpi` file
   - Drag and drop it into Firefox
   - Click "Add" when prompted

#### Option B: Disable Signature Requirement (Firefox Developer/Nightly Only)

**⚠️ Warning**: Only works on Firefox Developer Edition or Firefox Nightly

1. Type `about:config` in the address bar
2. Search for `xpinstall.signatures.required`
3. Set it to `false`
4. Now you can install unsigned extensions

### Method 3: Create XPI Package

1. **Zip the Extension**:
   ```bash
   cd /home/mahesh/pannel
   zip -r ../tradingview-wishlist.xpi * -x "*.git*" "README.md"
   ```

2. **Install the XPI**:
   - Drag the `.xpi` file into Firefox
   - Or go to `about:addons` → Click gear icon → "Install Add-on From File"

## Usage on Firefox

Once installed, the extension works identically to Chrome:

1. **Navigate to TradingView**:
   - Open [TradingView](https://in.tradingview.com/chart/)
   - The wishlist panel will appear on the right side

2. **Toggle the Panel**:
   - Click the extension icon in the toolbar
   - Use the toggle switch to show/hide the panel

3. **Navigate Stocks**:
   - Click any stock to open its chart
   - Use ↑/↓ arrow keys to navigate

## Differences Between Chrome and Firefox

### What Works Identically:
✅ All UI features and animations  
✅ Keyboard navigation  
✅ Stock list loading  
✅ State persistence  
✅ Toggle on/off functionality  

### Firefox-Specific Behavior:
- Uses `browser.*` API (with Chrome compatibility fallback)
- May require signing for permanent installation
- Temporary installs need to be reloaded after browser restart

## Troubleshooting

### Extension Not Loading
- Check if `manifest.json` exists
- Ensure all files are in the same folder
- Look for errors in Browser Console (Ctrl+Shift+J)

### Panel Not Appearing
1. Check the extension is enabled in `about:addons`
2. Click the extension icon and ensure the toggle is ON
3. Refresh the TradingView page (F5)

### Keyboard Navigation Not Working
- Make sure you're not typing in an input field
- Click on the TradingView page first to focus it
- Check if another extension is capturing arrow keys

## Development Testing

To test changes during development:

1. Make your code changes
2. Go to `about:debugging` → "This Firefox"
3. Click "Reload" next to your extension
4. Refresh the TradingView page

## Browser Compatibility

| Feature | Chrome | Firefox | Edge |
|---------|--------|---------|------|
| Manifest V3 | ✅ | ✅ | ✅ |
| Storage API | ✅ | ✅ | ✅ |
| Content Scripts | ✅ | ✅ | ✅ |
| Popup UI | ✅ | ✅ | ✅ |
| Keyboard Events | ✅ | ✅ | ✅ |

## Support

If you encounter issues specific to Firefox:
1. Check the Browser Console for errors
2. Verify you're using Firefox 109.0 or higher
3. Ensure JavaScript is enabled
4. Try disabling other extensions that might conflict

---

**Note**: The extension uses cross-browser compatible APIs and should work seamlessly on Firefox, Chrome, Edge, and other Chromium-based browsers.

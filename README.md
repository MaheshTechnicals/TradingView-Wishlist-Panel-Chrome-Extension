# 📊 TradingView Wishlist Panel

A modern, dark-themed browser extension that adds a beautiful wishlist panel to TradingView charts with keyboard navigation and smooth animations.

**✨ Cross-Browser Support**: Works on Chrome, Firefox, Edge, and other Chromium-based browsers!

## ✨ Features

- **🎨 Modern Dark UI**: Gradient-based design with smooth animations and glassmorphism effects
- **⌨️ Keyboard Navigation**: Use Arrow Up/Down to navigate through stocks
- **💾 State Persistence**: Selected stock remains active even after page refresh
- **🚀 Instant Chart Updates**: Click any stock to instantly load its chart
- **📱 Fully Responsive**: Adapts to different screen sizes without overlapping content
- **⚡ High Performance**: Optimized with GPU acceleration and smooth transitions
- **🎯 Smart Selection**: Automatically highlights the current chart's stock

## 📦 Installation

### Chrome / Edge / Chromium Browsers

#### Method 1: Load Unpacked Extension (For Development)

1. **Download/Clone this repository** to your local machine

2. **Open Chrome Extensions Page**:
   - Navigate to `chrome://extensions/` (Chrome)
   - Or `edge://extensions/` (Edge)
   - Or click Menu (⋮) → Extensions → Manage Extensions

3. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**:
   - Click "Load unpacked" button
   - Select the folder containing this extension (where `manifest.json` is located)

5. **Verify Installation**:
   - You should see "TradingView Wishlist Panel" in your extensions list
   - The extension should be enabled by default

#### Method 2: Create Extension Package (For Distribution)

1. Navigate to `chrome://extensions/`
2. Click "Pack extension"
3. Select the extension directory
4. Share the generated `.crx` file

### Firefox

#### Quick Install (Temporary - For Testing)

1. **Open Firefox Add-ons Debug Page**:
   - Type `about:debugging` in the address bar
   - Click "This Firefox" in the left sidebar

2. **Load the Extension**:
   - Click "Load Temporary Add-on..."
   - Navigate to your extension folder and select `manifest.json`

3. **Note**: Temporary extensions are removed when Firefox closes

📖 **For permanent Firefox installation**, see [FIREFOX_INSTALL.md](FIREFOX_INSTALL.md) for detailed instructions including signing and XPI packaging.

## 🚀 Usage

1. **Navigate to TradingView**:
   - Open [TradingView](https://in.tradingview.com/chart/)
   - The wishlist panel will automatically appear on the right side

2. **Customize Your Wishlist**:
   - Edit `list.txt` in the extension folder
   - Add stock symbols in the format: `NSE:SYMBOL`
   - One symbol per line
   - Example:
     ```
     NSE:INFY
     NSE:RELIANCE
     NSE:TCS
     ```

3. **Navigate Stocks**:
   - **Click**: Click any stock to open its chart
   - **Keyboard**: Use ↑/↓ arrow keys to navigate
   - **First Load**: The first stock is selected by default

4. **State Persistence**:
   - Your selected stock is saved automatically
   - After page refresh, the same stock remains highlighted
   - The chart URL syncs with your selection

## 📁 File Structure

```
tradingview-wishlist/
├── manifest.json           # Extension configuration (Chrome + Firefox)
├── content.js              # Main logic and injection
├── popup.js                # Popup toggle functionality
├── popup.html              # Extension popup UI
├── styles.css              # Dark gradient styling
├── browser-polyfill.js     # Cross-browser compatibility (optional)
├── list.txt                # Your stock symbols
├── README.md               # This file
├── FIREFOX_INSTALL.md      # Firefox-specific installation guide
└── icon*.png               # Extension icons (optional)
```

## 🎨 Customization

### Change Stock List

Edit `list.txt` with your preferred stocks:

```
NSE:ADANIENT
NSE:INFY
NSE:RELIANCE
NSE:TCS
NSE:HDFCBANK
```

### Modify Colors

Edit `styles.css` to customize the appearance:

```css
/* Main gradient */
background: linear-gradient(135deg, #1a1d29 0%, #0d0f16 100%);

/* Active item gradient */
background: linear-gradient(135deg, rgba(88, 86, 214, 0.25) 0%, rgba(131, 58, 180, 0.25) 100%);
```

### Adjust Position

In `styles.css`, modify the panel position:

```css
.tv-wishlist-panel {
  top: 60px;    /* Distance from top */
  right: 20px;  /* Distance from right */
}
```

## 🔧 Technical Details

- **Manifest Version**: 3
- **Permissions**: `storage` (for state persistence)
- **Host Permissions**: `https://in.tradingview.com/*`
- **Injection**: Content script runs on chart pages only
- **Storage**: Uses `chrome.storage.local` for persistence

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ↓ Arrow Down | Select next stock |
| ↑ Arrow Up | Select previous stock |

## 🐛 Troubleshooting

### Panel Not Showing

1. Verify you're on a TradingView chart page: `https://in.tradingview.com/chart/`
2. Check if extension is enabled in `chrome://extensions/`
3. Refresh the page (Ctrl+R or Cmd+R)
4. Check browser console for errors (F12)

### Stocks Not Loading

1. Verify `list.txt` exists in extension folder
2. Check format: one symbol per line (`NSE:SYMBOL`)
3. Ensure no empty lines or special characters
4. Reload extension: toggle off/on in `chrome://extensions/`

### Selection Not Persisting

1. Check Chrome storage permissions in manifest
2. Clear extension storage: Chrome DevTools → Application → Storage
3. Reload extension

### Keyboard Navigation Not Working

1. Click on the page to ensure it has focus
2. Make sure you're not typing in a text input
3. Try clicking the wishlist panel first

## 🔄 Updates

To update your stock list:

1. Edit `list.txt` in the extension folder
2. Reload the extension:
   - **Chrome/Edge**: `chrome://extensions/` → Click reload icon
   - **Firefox**: `about:debugging` → Click "Reload"
3. Refresh TradingView page

## 📝 Notes

- The extension only works on TradingView chart pages
- Internet connection required to load charts
- Compatible with Chrome, Firefox, Edge, and other Chromium-based browsers
- Does not interfere with TradingView's native functionality

## 🎯 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 88+ | ✅ Fully Supported |
| Firefox | 109+ | ✅ Fully Supported |
| Edge | 88+ | ✅ Fully Supported |
| Brave | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |

**Screen Sizes**: Responsive from 768px to 4K displays  
**TradingView**: Works with all TradingView domains (in.tradingview.com, www.tradingview.com)

## 💡 Tips

- Keep your stock list under 50 symbols for best performance
- Use descriptive symbol names for easy identification
- The panel is fixed and won't scroll with the page
- Hover effects provide visual feedback before clicking

## 📄 License

This extension is provided as-is for personal use. Modify and customize as needed.

## 🤝 Support

For issues or suggestions:
1. Check the troubleshooting section above
2. Review the browser console for errors (F12)
3. Ensure all files are in the correct location

---

**Made with ❤️ for TradingView users**

Enjoy seamless stock navigation with your personal wishlist! 📈

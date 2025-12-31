# 📊 TradingView Wishlist Panel v1.2.0

A modern, dark-themed browser extension that adds a beautiful wishlist panel to TradingView charts with **dynamic FnO stock list**, keyboard navigation and smooth animations.

**✨ Cross-Browser Support**: Works on Chrome, Firefox, Edge, Brave, Opera, and other Chromium-based browsers!
**🔄 Dynamic Updates**: Fetches latest FnO stocks from API automatically!

---

## ✨ Features

- **🔄 Dynamic Stock List**: Automatically fetches latest FnO stocks from API (no manual updates needed!)
- **💾 Smart Caching**: Caches stock list for 24 hours to improve performance
- **🎨 Modern Dark UI**: Gradient-based design with smooth animations and glassmorphism effects
- **⌨️ Keyboard Navigation**: Use Arrow Up/Down keys to navigate through stocks instantly
- **💾 State Persistence**: Selected stock remains active even after page refresh
- **🚀 Instant Chart Updates**: Click any stock to instantly load its chart
- **📱 Fully Responsive**: Adapts to different screen sizes without overlapping TradingView content
- **⚡ High Performance**: Optimized with GPU acceleration and smooth transitions
- **🎯 Smart Selection**: Automatically highlights the current chart's stock in the panel
- **🔄 Toggle Control**: Enable/disable the panel anytime via the extension popup
- **📋 Collapsible Panel**: Minimize the panel to save screen space
- **🌐 Cross-Browser**: Works seamlessly on all major browsers
- **🔒 Fallback Support**: Uses local list.txt as backup if API fails

---

## 📦 Installation Guide

### Quick Install (Recommended)

**📥 Download Pre-built Extension**:

1. Go to [Releases Page](../../releases)
2. Download the appropriate file for your browser:
   - **Chrome/Edge/Brave/Opera**: Download `tradingview-wishlist-extension-vX.X.X.zip`
   - **Firefox**: Download `tradingview-wishlist-firefox-vX.X.X.xpi`
3. Follow installation instructions below for your browser

---

### Chrome / Edge / Brave / Opera (Chromium-based Browsers)

#### Method 1: Install from Release ZIP (Recommended)

1. **Download** the latest `tradingview-wishlist-extension-vX.X.X.zip` from [Releases](../../releases)

2. **Extract the ZIP** file to a folder on your computer

3. **Open Browser Extensions Page**:
   - **Chrome**: Navigate to `chrome://extensions/`
   - **Edge**: Navigate to `edge://extensions/`
   - **Brave**: Navigate to `brave://extensions/`
   - **Opera**: Navigate to `opera://extensions/`

4. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner

5. **Load the Extension**:
   - Click "Load unpacked" button
   - Select the extracted folder

6. **Verify Installation**:
   - You should see "TradingView Wishlist Panel" in your extensions list
   - The extension icon should appear in your browser toolbar

#### Method 2: Load Unpacked Extension (For Development/Testing)

1. **Download/Clone this repository** to your local machine

2. **Open Browser Extensions Page**:
   - **Chrome**: Navigate to `chrome://extensions/`
   - **Edge**: Navigate to `edge://extensions/`
   - **Brave**: Navigate to `brave://extensions/`
   - **Opera**: Navigate to `opera://extensions/`
   - Or: Click Menu (⋮) → Extensions → Manage Extensions

3. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**:
   - Click "Load unpacked" button
   - Select the folder containing this extension (where `manifest.json` is located)

5. **Verify Installation**:
   - You should see "TradingView Wishlist Panel" in your extensions list
   - The extension icon should appear in your browser toolbar
   - The extension is enabled by default

#### Method 2: Create Extension Package (For Distribution)

1. Navigate to `chrome://extensions/` (or your browser's extension page)
2. Click "Pack extension" button
3. Select the extension directory
4. This generates a `.crx` file and a private key
5. Share the `.crx` file with others (they can drag-drop it into their browser)

**Note**: Chrome Web Store requires submission for public distribution.

---

### Firefox

#### Method 1: Install from Release XPI (Recommended)

1. **Download** the latest `tradingview-wishlist-firefox-vX.X.X.xpi` from [Releases](../../releases)

2. **Install in Firefox**:
   - **Option A**: Drag and drop the `.xpi` file into Firefox window
   - **Option B**: File → Open File → Select the `.xpi` file
   - Click "Add" when prompted

3. **Verify Installation**:
   - Extension icon appears in Firefox toolbar
   - The panel works on TradingView pages

**Note**: For unsigned extensions, Firefox may show warnings. See Method 4 below for permanent installation.

#### Method 2: Temporary Installation (Quick Testing)

This is the **fastest** way to test the extension on Firefox:
3
1. **Open Firefox Debug Page**:
   - Type `about:debugging` in the address bar and press Enter
   - Click "This Firefox" in the left sidebar

2. **Load the Extension**:
   - Click "Load Temporary Add-on..." button
   - Navigate to your extension folder
   - Select the `manifest.json` file

3. **Verify Installation**:
   - The extension appears in the list as "TradingView Wishlist Panel"
   - Extension icon appears in Firefox toolbar
   - **Important**: Temporary extensions are removed when Firefox closes

#### Method 2: Create XPI Package (Permanent Installation)

Create a distributable Firefox extension package:

1. **Package the extension** (from terminal):
   ```bash
   cd /path/to/pannel
   zip -r -FS ../tradingview-wishlist.xpi * --exclude '*.git*' --exclude '*node_modules*'
   ```

2. **Install the XPI**:
   - Drag and drop `tradingview-wishlist.xpi` into Firefox
   - Or: File → Open File → Select the XPI file
   - Click "Add" when prompted

**Note for permanent Firefox installation**: 
- Firefox requires extensions to be **signed** by Mozilla for permanent installation
- For personal use, temporary loading is sufficient
- For public distribution, submit to [Firefox Add-ons](https://addons.mozilla.org/developers/)

#### Method 4: Permanent Installation with Signing (Public Distribution)

For production/permanent installation:

1. **Create Firefox Account**:
   - Go to [addons.mozilla.org](https://addons.mozilla.org/)
   - Create an account or sign in

2. **Submit for Signing**:
   - Go to [Developer Hub](https://addons.mozilla.org/developers/)
   - Click "Submit a New Add-on"
   - Choose "On your own" (self-hosted) or "On this site" (public listing)
   - Upload your ZIP file
   - Mozilla will automatically sign it (usually within minutes)

3. **Install Signed Extension**:
   - Download the signed `.xpi` file
   - Drag and drop it into Firefox
   - Extension will install permanently

#### Method 5: Firefox Developer Edition (Skip Signing)

⚠️ **Only for Firefox Developer Edition or Nightly**:

1. Type `about:config` in the address bar
2. Search for `xpinstall.signatures.required`
3. Set to `false`
4. Now you can install unsigned extensions permanently

---

## 🚀 How to Use

### First Time Setup

1. **Navigate to TradingView**:
   - Open [TradingView](https://in.tradingview.com/chart/) in your browser
   - The wishlist panel will automatically appear on the right side of the page

2. **Stock List is Automatic** (v1.2.0+):
   - The extension automatically fetches the latest NSE FnO stocks from our API
   - No manual configuration needed!
   - Stock list updates automatically every 24 hours
   - API Source: `https://nse-result-calendar.netlify.app/api/fno-list`
   
   **Manual Override (Optional)**:
   If you want to use a custom list, edit the `list.txt` file:
   ```
   NSE:INFY
   NSE:RELIANCE
   NSE:TCS
   NSE:HDFCBANK
   ```
   The extension will use list.txt as fallback if API is unavailable.

3. **Reload TradingView**:
   - Refresh the page to see the stock list

### Using the Panel

#### Toggle Panel ON/OFF

1. **Click the Extension Icon** in your browser toolbar
2. **Toggle the switch** to enable or disable the panel
3. The panel appears/disappears **instantly** without needing to refresh the page

#### Navigate Stocks

**Method 1: Mouse Click**
- Click any stock in the panel to instantly load its chart
- The selected stock is highlighted in the panel
- TradingView chart updates automatically

**Method 2: Keyboard Navigation**
- Use **↑ (Arrow Up)** to move to the previous stock
- Use **↓ (Arrow Down)** to move to the next stock
- Navigation wraps around (last → first, first → last)
- Works when you're not typing in input fields

#### Collapse/Expand Panel

- Click the **‹** button on the left edge of the panel to collapse it
- Click the **›** button to expand it back
- Saves screen space while keeping functionality accessible

#### State Persistence

- Your **selected stock is automatically saved**
- After refreshing the page, the same stock remains highlighted
- The panel remembers your position across browser sessions

### Panel Features Explained

| Feature | Description |
|---------|-------------|
| **Stock Number** | Sequential numbering (1, 2, 3...) for quick reference |
| **Symbol Name** | Main stock symbol (e.g., INFY, RELIANCE) |
| **Exchange** | Exchange identifier (e.g., NSE, NASDAQ) |
| **Active Indicator** | Highlighted row shows current chart |
| **Arrow Icon** | Visual indicator for clickable items |
| **Smooth Scrolling** | Auto-scrolls to keep selected stock visible |

---

## 📁 Project Structure

```
tradingview-wishlist/
├── manifest.json           # Extension configuration (Manifest V3, v1.2.0)
├── content.js              # Main logic: API fetch, caching, panel creation, navigation
├── popup.js                # Popup toggle control functionality
├── popup.html              # Extension popup UI with toggle switch
├── styles.css              # Dark gradient styling and animations
├── browser-polyfill.js     # Cross-browser API compatibility layer
├── list.txt                # Fallback stock watchlist (if API fails)
├── package-firefox.sh      # Script to create Firefox XPI package
├── README.md               # This file (comprehensive guide)
└── icon*.png               # Extension icons (optional)
```

---

## 🎨 Customization

### Stock List (v1.2.0)

**Automatic Mode (Default)**:
The extension automatically fetches the latest NSE FnO stocks from:
```
https://nse-result-calendar.netlify.app/api/fno-list
```
- Updates every 24 hours
- No configuration needed
- Always shows current FnO stocks

**Manual Override (Optional)**:
To use a custom list, edit `list.txt`:

```
NSE:ADANIENT
NSE:INFY
NSE:RELIANCE
NSE:TCS
NSE:HDFCBANK
NASDAQ:AAPL
NASDAQ:MSFT
```

**Supported formats**:
- Indian Stocks: `NSE:SYMBOL` or `BSE:SYMBOL`
- US Stocks: `NASDAQ:SYMBOL` or `NYSE:SYMBOL`
- Any TradingView symbol: `EXCHANGE:SYMBOL`

**Force API Refresh**:
Clear the extension's cache to fetch fresh data immediately:
1. Open browser DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find and delete `tradingview_wishlist_cache`
4. Refresh TradingView page

### Modify Panel Styling

Edit `styles.css` to customize the panel appearance:

**Colors**:
```css
/* Main panel gradient background */
background: linear-gradient(135deg, #1a1d29 0%, #0d0f16 100%);

/* Active/selected item gradient */
background: linear-gradient(135deg, rgba(88, 86, 214, 0.25) 0%, rgba(131, 58, 180, 0.25) 100%);
```

**Position**:
```css
.tv-wishlist-panel {
  top: 60px;    /* Distance from top */
  right: 20px;  /* Distance from right */
  width: 280px; /* Panel width */
}
```

---

## 🔧 Technical Details

### Architecture (v1.2.0)

- **Manifest Version**: 3 (Latest standard)
- **Content Script**: Injects panel into TradingView pages
- **API Integration**: Fetches stocks from REST API with caching
- **Background**: None (lightweight, no background process)
- **Popup**: Toggle control for enabling/disabling panel

### API Details

- **Endpoint**: `https://nse-result-calendar.netlify.app/api/fno-list`
- **Method**: GET
- **Response Format**: 
  ```json
  {
    "symbols": ["360ONE", "ABB", "ABCAPITAL", ...],
    "count": 208,
    "lastUpdated": "2025-12"
  }
  ```
- **Cache Duration**: 24 hours
- **Fallback**: Uses local list.txt if API fails

### Permissions

| Permission | Purpose |
|------------|---------|
| `storage` | Save selected stock index and panel state |
| `host_permissions` | Access TradingView domains to inject panel |

### Storage

- Uses `chrome.storage.local` / `browser.storage.local`
- **Stores**: 
  - `panelEnabled` (boolean) - Panel toggle state
  - `tradingview_wishlist_selected` (number) - Selected stock index
  - `tradingview_wishlist_cache` (object) - Cached API data with timestamp
- Storage is synced across sessions

### Cross-Browser Compatibility

The extension uses a compatibility layer:

```javascript
const browserAPI = (typeof browser !== 'undefined') ? browser : chrome;
```

This ensures seamless operation on both Chrome (uses `chrome.*` API) and Firefox (uses `browser.*` API).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **↓** Arrow Down | Navigate to next stock in list (wraps around) |
| **↑** Arrow Up | Navigate to previous stock in list (wraps around) |

**Note**: Keyboard shortcuts only work when not typing in input fields.

---

## 🐛 Troubleshooting

### Panel Not Showing

**Possible causes and solutions**:

1. **Extension is disabled**:
   - Click extension icon → Toggle switch to ON
   - Or check `chrome://extensions/` and enable the extension

2. **Wrong page**:
   - Ensure you're on a TradingView chart page: `https://in.tradingview.com/chart/`
   - The panel only appears on chart pages, not homepage

3. **Page not loaded**:
   - Wait for TradingView to fully load
   - Try refreshing the page (Ctrl+R or Cmd+R)

4. **Browser console errors**:
   - Open DevTools (F12 or Ctrl+Shift+I)
   - Check Console tab for error messages

### Stocks Not Loading

1. **Check API Status**:
   - Open browser DevTools (F12) → Console tab
   - Look for "Fetching stock list from API..." or error messages
   - If API fails, extension will use fallback list.txt

2. **Verify `list.txt` exists** as fallback in extension folder

3. **Clear cache and retry**:
   - Open DevTools (F12) → Application → Storage
   - Find and delete `tradingview_wishlist_cache`
   - Refresh TradingView page

4. **Check internet connection**: API requires active internet

5. **Reload extension**: 
   - `chrome://extensions/` → Click reload icon
   - Then refresh TradingView page

### Selection Not Persisting

1. **Check storage permissions**:
   - Verify `"storage"` is in `manifest.json` permissions
2. **Clear extension storage**:
   - Open DevTools (F12)
   - Application tab → Storage → Local Storage
   - Clear extension storage and reload
3. **Reload extension**:
   - `chrome://extensions/` → Toggle off and on

### Keyboard Navigation Not Working

1. **Page must have focus**: Click anywhere on the page first
2. **Not in text input**: Ensure cursor is not in a search box or text field
3. **Try clicking the panel**: Click the wishlist panel to ensure it's active

### Extension Icon Not Showing

1. **Pin the extension**:
   - Click puzzle icon (🧩) in toolbar
   - Find "TradingView Wishlist Panel"
   - Click pin icon
2. **Check if extension is enabled** at `chrome://extensions/`

---

## 🔄 Updating the Extension

### Version 1.2.0 Updates

**New Features:**
- ✅ Dynamic stock list from API (no manual updates!)
- ✅ Smart caching (24-hour cache for performance)
- ✅ Automatic fallback to list.txt if API fails
- ✅ Latest NSE FnO stocks always available

### Update Stock List

**Automatic (v1.2.0+)**:
- Stock list updates automatically from API every 24 hours
- No manual action needed!

**Manual Refresh**:
1. Clear cache in browser DevTools
2. Or wait 24 hours for auto-refresh

### Update Extension Code

After modifying `content.js`, `popup.js`, or other files:

1. **Save your changes**
2. **Reload extension** (see above)
3. **Hard refresh** TradingView page (Ctrl+Shift+R)

---

## 📝 Important Notes

- ✅ Extension **only works** on TradingView chart pages (`/chart/` URL)
- ✅ Requires active **internet connection** to load charts
- ✅ **Does not interfere** with TradingView's native functionality
- ✅ **Privacy**: No data is collected or sent to external servers
- ✅ **Lightweight**: Minimal performance impact (~200KB)
- ✅ **No background process**: Only runs when on TradingView

---

## 🎯 Browser Compatibility Table

| Browser | Minimum Version | Status | Installation Method |
|---------|----------------|--------|---------------------|
| Chrome | 88+ | ✅ Fully Supported | Load unpacked or .crx |
| Firefox | 109+ | ✅ Fully Supported | Temporary or signed XPI |
| Edge | 88+ | ✅ Fully Supported | Load unpacked or .crx |
| Brave | Latest | ✅ Fully Supported | Load unpacked |
| Opera | Latest | ✅ Fully Supported | Load unpacked |
| Vivaldi | Latest | ✅ Likely Supported | Load unpacked |

**Screen Sizes**: Responsive design works on 768px to 4K+ displays  
**TradingView Domains**: Compatible with all TradingView regions (in.tradingview.com, www.tradingview.com, tradingview.com)

---

## 💡 Pro Tips

- 📊 **Organize by sectors**: Group similar stocks together in `list.txt`
- 🔢 **Keep it manageable**: Limit to 30-50 stocks for optimal performance
- ⚡ **Quick access**: Pin the extension icon for easy toggle access
- 🎨 **Customize colors**: Match the panel theme with your TradingView theme
- ⌨️ **Master keyboard shortcuts**: Use arrow keys for lightning-fast navigation
- 💾 **Backup your list**: Keep a copy of `list.txt` for easy restoration

---

## 🚀 Advanced Usage

### Multiple Watchlists

To switch between different watchlists:

1. Create multiple list files: `list-intraday.txt`, `list-swing.txt`
2. Rename desired list to `list.txt` before loading
3. Reload extension to apply changes

### Custom Panel Width

Edit `styles.css`:

```css
.tv-wishlist-panel {
  width: 320px; /* Increase from default 280px */
}
```

### Hide Stock Numbers

Edit `styles.css`:

```css
.tv-wishlist-item-number {
  display: none; /* Hide numbering */
}
```

---

## 🤝 Contributing

Have ideas or improvements? Contributions are welcome!

1. Fork the repository
2. Make your changes
3. Test on Chrome and Firefox
4. Submit a pull request

---

## 📄 License

This extension is provided **as-is** for personal and educational use. Feel free to modify and customize for your needs.

---

## 📧 Support

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Verify your browser version meets minimum requirements
3. Ensure TradingView website is accessible
4. Check browser console for error messages (F12)

---

## 💖 Support The Project

If you find this tool helpful and want to support my work, please consider buying me a coffee!

<a href="https://www.paypal.com/paypalme/Varma161" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

- **UPI:** `maheshtechnicals@apl`

---

**Made with ❤️ for TradingView traders**

Enjoy seamless stock navigation with your personal wishlist! 📈

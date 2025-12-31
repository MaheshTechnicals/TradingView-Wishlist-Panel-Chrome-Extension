# Changelog

## [1.2.0] - 2025-12-31

### 🚀 New Features
- **Dynamic Stock List**: Automatically fetches latest NSE FnO stocks from API
- **Smart Caching**: Caches stock data for 24 hours to improve performance and reduce API calls
- **Automatic Updates**: Stock list refreshes automatically every 24 hours
- **Fallback Support**: Uses local list.txt as backup if API is unavailable

### 🔧 Technical Changes
- Added API integration: `https://nse-result-calendar.netlify.app/api/fno-list`
- Implemented localStorage caching with timestamp validation
- Enhanced error handling with automatic fallback mechanism
- Added detailed console logging for debugging

### 📝 API Response Format
```json
{
  "symbols": ["360ONE", "ABB", "ABCAPITAL", ...],
  "count": 208,
  "lastUpdated": "2025-12"
}
```

### 🌐 Cross-Browser Support
- ✅ Chrome 88+
- ✅ Firefox 109+
- ✅ Edge 88+
- ✅ Brave (Latest)
- ✅ Opera (Latest)

### 🐛 Bug Fixes
- Improved error handling for network failures
- Better cache validation logic

---

## [1.0.0] - 2025-12-30

### Initial Release
- Modern dark-themed wishlist panel
- Keyboard navigation with Arrow Up/Down
- State persistence across sessions
- Toggle control via extension popup
- Collapsible panel design
- Cross-browser compatibility
- 208 hardcoded NSE stocks

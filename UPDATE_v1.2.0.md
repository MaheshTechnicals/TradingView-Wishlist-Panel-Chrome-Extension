# 🚀 Version 1.2.0 Update Guide

## What's New?

Version 1.2.0 brings **automatic stock list updates** - no more manual editing of list.txt!

### ✨ Key Improvements

1. **🔄 Dynamic API Integration**
   - Automatically fetches latest NSE FnO stocks
   - Always up-to-date with current market instruments
   - No manual configuration required

2. **💾 Smart Caching**
   - Caches stock list for 24 hours
   - Reduces API calls and improves performance
   - Works offline after initial fetch

3. **🛡️ Fallback Support**
   - Uses local list.txt if API is unavailable
   - Ensures extension works even without internet
   - Seamless user experience

---

## How to Update

### For Developers/Manual Installation

1. **Pull Latest Changes** (if using Git):
   ```bash
   cd /home/mahesh/pannel
   git pull
   ```

2. **Reload Extension**:
   - **Chrome/Edge/Brave**: 
     - Go to `chrome://extensions/`
     - Find "TradingView Wishlist Panel"
     - Click the reload icon (↻)
   
   - **Firefox**:
     - Go to `about:debugging#/runtime/this-firefox`
     - Find the extension
     - Click "Reload"

3. **Refresh TradingView**:
   - Open or refresh any TradingView chart page
   - Check console (F12) for "Fetching stock list from API..."

---

## Verification

### Check Version
1. Open `chrome://extensions/` or `about:addons`
2. Find "TradingView Wishlist Panel"
3. Version should show **1.2.0**

### Verify API Works
1. Open TradingView: `https://in.tradingview.com/chart/`
2. Open DevTools (F12) → Console tab
3. Look for one of these messages:
   - ✅ "Fetching stock list from API..."
   - ✅ "Loaded 208 stocks from API"
   - ✅ "Using cached stock data"

### Check Stock List
1. Panel should appear on the right side
2. Should show ~208 stocks (current FnO count)
3. Header shows "📊 Wishlist" with stock count

---

## Troubleshooting

### API Not Working?
- **Check Internet**: API requires active connection
- **Check Console**: Look for error messages in DevTools
- **Fallback Active**: Extension will use list.txt automatically

### Clear Cache
If you want to force a fresh API fetch:
1. Open DevTools (F12) → Application tab
2. Storage → Local Storage → Extension storage
3. Delete `tradingview_wishlist_cache` key
4. Refresh TradingView page

### Still Having Issues?
1. Clear browser cache completely
2. Reload extension
3. Hard refresh TradingView (Ctrl+Shift+R)

---

## Technical Details

### API Endpoint
```
https://nse-result-calendar.netlify.app/api/fno-list
```

### Cache Duration
- **24 hours** (86400000 milliseconds)
- Automatically refreshes after expiry

### Storage Keys
- `tradingview_wishlist_cache` - Cached API data
- `tradingview_wishlist_selected` - Selected stock index
- `panelEnabled` - Panel toggle state

---

## Migration Notes

### From v1.0.0 to v1.2.0

**No Breaking Changes!**
- Existing preferences preserved
- Selected stock index maintained
- Panel toggle state retained
- list.txt still works as fallback

**Backwards Compatible**
- If API fails, falls back to list.txt
- All v1.0.0 features still work exactly the same

---

## What Happens to list.txt?

- **Still Included**: list.txt remains in extension folder
- **Fallback Only**: Used only if API fetch fails
- **Manual Override**: You can still edit it for custom lists
- **Not Required**: Extension works without it if API is accessible

---

## Performance Impact

### Network Usage
- **Initial Load**: ~2-5 KB (one-time API call)
- **Subsequent Loads**: 0 KB (uses cache for 24 hours)
- **Minimal Impact**: Negligible bandwidth usage

### Speed
- **First Load**: +50-200ms (API fetch)
- **Cached Load**: 0ms delay (instant)
- **Overall**: No noticeable performance difference

---

## Future Roadmap (v1.3.0)

Planned features:
- 🔍 Search/filter functionality
- 📊 Stock categories/groups
- ⚙️ Settings panel for customization
- 🎨 Theme options
- 📱 Better mobile responsiveness

---

**Questions or Issues?**  
Check the main [README.md](README.md) for comprehensive documentation.

---

**Happy Trading! 📈**

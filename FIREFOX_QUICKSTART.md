# 🦊 Firefox Quick Start Guide

## ⚡ Fastest Way to Test on Firefox

### Option 1: Temporary Installation (Recommended for Testing)

```bash
# No packaging needed - just load directly!

1. Open Firefox
2. Type: about:debugging
3. Click: "This Firefox" 
4. Click: "Load Temporary Add-on..."
5. Navigate to: /home/mahesh/pannel/
6. Select: manifest.json
7. Done! ✅
```

**Pros**: Instant, no signing needed  
**Cons**: Removed when Firefox closes

---

### Option 2: Create XPI Package

```bash
# Run the included script
cd /home/mahesh/pannel
./package-firefox.sh

# This creates: ../tradingview-wishlist.xpi
```

Then install the XPI:
1. Open Firefox
2. Drag and drop `tradingview-wishlist.xpi` into Firefox
3. Click "Add" when prompted

**Note**: Unsigned extensions may require Firefox Developer Edition

---

## 🧪 Quick Test

After installation:

1. ✅ Go to: https://in.tradingview.com/chart/
2. ✅ Look for the panel on the right side
3. ✅ Click the extension icon → Toggle ON if needed
4. ✅ Click any stock → Should load the chart
5. ✅ Press ↑/↓ arrows → Should navigate stocks

---

## 🐛 Troubleshooting

**Panel not showing?**
```
1. Click extension icon (puzzle piece in toolbar)
2. Ensure toggle is ON
3. Refresh the TradingView page (F5)
```

**Extension not loading?**
```
1. Check about:debugging → Console for errors
2. Ensure Firefox version is 109 or higher
3. Verify manifest.json exists in the folder
```

**Keyboard navigation not working?**
```
1. Click somewhere on the TradingView page first
2. Make sure you're not in a text input field
3. Try clicking the wishlist panel directly
```

---

## 📊 Comparison: Chrome vs Firefox

| Feature | Chrome | Firefox |
|---------|--------|---------|
| Installation | Load unpacked | Load temporary |
| Persistence | Permanent | Temporary (unless signed) |
| APIs Used | `chrome.*` | `browser.*` (auto-detected) |
| Dev Tools | chrome://extensions/ | about:debugging |
| Reload | Click reload icon | Click "Reload" button |

---

## 🎯 What Changed?

Your extension now:
- ✅ Uses cross-browser compatible APIs
- ✅ Detects Firefox vs Chrome automatically
- ✅ Works with Promise-based storage calls
- ✅ Includes Firefox-specific manifest settings

**No separate codebases needed!** One extension works everywhere.

---

## 🚀 You're Ready!

The extension is **fully compatible** with Firefox. Just load it using `about:debugging` and test it on TradingView!

**Current Location**: `/home/mahesh/pannel/`

---

**Quick Command Reference**:
```bash
# Package for Firefox
./package-firefox.sh

# Check extension files
ls -la /home/mahesh/pannel/

# View manifest
cat manifest.json
```

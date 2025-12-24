# Firefox Add-on Submission Guide

## Extension Information for Mozilla Add-ons

This document contains all the required information for submitting the TradingView Wishlist Panel extension to Firefox Add-ons (addons.mozilla.org).

---

## Basic Information

### Name
```
TradingView Wishlist Panel
```

### Add-on URL
```
https://addons.mozilla.org/*/tradingview-wishlist-panel
```

### Summary (Required)
**Character Limit: 250 characters**

```
A modern, dark-themed wishlist panel for TradingView charts with keyboard navigation and smooth animations
```

**Characters used**: 106 / 250

---

## Description

**Recommended: First 250 characters are most important**

```markdown
## Features

- 🎨 **Modern Dark UI**: Gradient-based design with smooth animations and glassmorphism effects
- ⌨️ **Keyboard Navigation**: Use Arrow Up/Down keys to navigate through stocks instantly
- 💾 **State Persistence**: Selected stock remains active even after page refresh
- 🚀 **Instant Chart Updates**: Click any stock to instantly load its chart
- 📱 **Fully Responsive**: Adapts to different screen sizes without overlapping TradingView content
- ⚡ **High Performance**: Optimized with GPU acceleration and smooth transitions
- 🎯 **Smart Selection**: Automatically highlights the current chart's stock in the panel
- 🔄 **Toggle Control**: Enable/disable the panel anytime via the extension popup
- 📋 **Collapsible Panel**: Minimize the panel to save screen space

## How to Use

1. Navigate to TradingView chart pages
2. The wishlist panel appears automatically on the right side
3. Click any stock to instantly switch charts
4. Use Arrow Up/Down keys for keyboard navigation
5. Toggle the panel on/off from the extension icon

## Customization

Edit the `list.txt` file to customize your stock watchlist with your preferred symbols in `EXCHANGE:SYMBOL` format (e.g., NSE:INFY, NASDAQ:AAPL).

## Privacy

This extension does not collect, store, or transmit any personal data. All settings are stored locally in your browser.
```

---

## Categories

**Select up to 3 categories:**

✅ **Primary Category**: Web Development  
✅ **Secondary Category**: Appearance  
✅ **Tertiary Category**: (Optional - leave blank)

**Rationale:**
- **Web Development**: Enhances TradingView web interface
- **Appearance**: Changes visual appearance of TradingView pages

---

## Add-on Flags

- [ ] This add-on is experimental
- [ ] This add-on requires payment, non-free services or software, or additional hardware
- [ ] My add-on doesn't fit into any of the categories

**All unchecked** - This is a stable, free extension

---

## Support Information

### Support Email
```
(Optional - Add your support email if you want to provide direct support)
```

### Support Website
```
https://github.com/YOUR_USERNAME/pannel
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username

---

## License

**Selected License**: ✅ **MIT License**

**Rationale**: 
- Permissive open-source license
- Allows users to modify and distribute
- Commonly used for browser extensions
- Simple and clear terms

**Alternative Options:**
- GNU General Public License v3.0 (if you want copyleft)
- Apache License 2.0 (if you want patent protection)
- All Rights Reserved (if you want to keep it proprietary)

---

## Privacy Policy

**Has Privacy Policy**: ✅ Yes (Recommended even for extensions that don't collect data)

### Privacy Policy Text

```markdown
# Privacy Policy for TradingView Wishlist Panel

**Last Updated**: December 24, 2025

## Data Collection

TradingView Wishlist Panel does NOT collect, store, or transmit any personal data or usage information.

## Local Storage

The extension uses browser's local storage API to save:
- Your selected stock position in the wishlist
- Panel enable/disable state

This data is stored **only on your device** and is never transmitted to any external servers.

## Permissions Explanation

- **storage**: Used to save your preferences locally on your device
- **host_permissions (TradingView domains)**: Required to inject the wishlist panel into TradingView pages

## Third-Party Services

This extension does not communicate with any third-party services. It only interacts with TradingView's public website to display the wishlist panel.

## Changes to Privacy Policy

If we make changes to this policy, we will update the "Last Updated" date and notify users through the extension update notes.

## Contact

For privacy-related questions, please contact: [Your Email or GitHub Issues URL]
```

---

## Notes to Reviewer

```
Dear Reviewer,

Thank you for reviewing the TradingView Wishlist Panel extension.

## Testing Instructions

1. Install the extension in Firefox
2. Navigate to https://in.tradingview.com/chart/
3. The wishlist panel should appear on the right side of the page
4. Click the extension icon to toggle the panel on/off

## Key Testing Points

- Panel appears automatically on TradingView chart pages
- Clicking stocks in the panel navigates to that stock's chart
- Arrow Up/Down keys cycle through stocks
- Toggle switch in popup enables/disables the panel instantly
- Selected stock persists after page refresh

## Stock List Customization

The extension includes a default list of 208 NSE (Indian) stocks in list.txt. Users can customize this file to add their own symbols.

## No External Dependencies

- No minification or build tools used
- All code is plain JavaScript, HTML, and CSS
- No external API calls or data transmission
- Uses only local browser storage

## Security Notes

- All innerHTML usages have been replaced with createElement/textContent for security
- No remote code execution
- No eval() or similar dynamic code execution
- Content Security Policy compliant

## Browser Compatibility

- Tested on Firefox 109+
- Manifest V3 compliant
- Uses browser.* API with chrome.* fallback for cross-browser compatibility

Please let me know if you need any additional information or have questions.

Best regards,
Extension Developer
```

---

## Source Code Submission

**Do you need to submit source code?**

**Answer**: ❌ **No**

**Reason**: The extension uses only plain, unprocessed files:
- Plain JavaScript (no minification/bundling)
- Plain HTML (no templating)
- Plain CSS (no preprocessors)
- No build tools (webpack, rollup, etc.)
- No code generators or minifiers

All code is already in source form and directly readable.

---

## Pre-Submission Checklist

Before submitting, ensure:

- [x] Manifest version is 3
- [x] Extension ID is set in browser_specific_settings.gecko.id
- [x] data_collection_permissions is properly configured
- [x] No unsafe innerHTML usage (replaced with createElement)
- [x] All icons are included (icon16.png, icon48.png, icon128.png)
- [x] README.md is complete and helpful
- [x] License file exists (if using open-source license)
- [x] Privacy policy is written
- [x] Extension has been tested on latest Firefox
- [x] list.txt contains valid stock symbols
- [x] All URLs in manifest are valid

---

## Expected Review Timeline

- **Automated Review**: Instant (checks manifest and security)
- **Human Review**: 1-14 days depending on queue
- **First-time submissions**: May take longer

---

## Post-Submission Steps

After your extension is approved:

1. **Update README**: Add Firefox Add-ons badge and installation link
2. **Create Release**: Use GitHub Actions to create release packages
3. **Promote**: Share on social media, forums, etc.
4. **Monitor Reviews**: Respond to user feedback and reviews
5. **Update Regularly**: Keep extension up-to-date with TradingView changes

---

## Update Process (Future Versions)

When submitting updates:

1. Increment version number in manifest.json
2. Run GitHub Actions to create new release
3. Upload new XPI to Firefox Add-ons
4. Add release notes describing changes
5. No need to re-submit source code if no tools are added

---

## Useful Links

- **Extension Workshop**: https://extensionworkshop.com/
- **Developer Hub**: https://addons.mozilla.org/developers/
- **Add-on Policies**: https://extensionworkshop.com/documentation/publish/add-on-policies/
- **Manifest V3 Guide**: https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/
- **Review Guide**: https://extensionworkshop.com/documentation/publish/add-on-review-process/

---

## Contact Mozilla

- **Developer Forum**: https://discourse.mozilla.org/c/add-ons/
- **Matrix Chat**: https://wiki.mozilla.org/Matrix
- **Email Support**: amo-admins@mozilla.org (for urgent issues only)

---

**Good luck with your submission! 🎉**

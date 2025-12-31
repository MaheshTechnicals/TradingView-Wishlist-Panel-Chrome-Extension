# 🚀 GitHub Actions Release Workflow Guide

This document explains how to use the automated release workflow for the TradingView Wishlist Panel extension.

---

## 📋 Overview

The workflow automatically:
- ✅ Packages the extension for Chrome/Edge/Brave/Opera (ZIP format)
- ✅ Packages the extension for Firefox (XPI format)
- ✅ Creates a GitHub release with version tag
- ✅ Uploads both packages as release assets
- ✅ Includes comprehensive release notes

---

## 🎯 How to Create a Release

### Step 1: Navigate to Actions
1. Go to your repository on GitHub
2. Click the **"Actions"** tab at the top
3. Select **"Create Extension Release"** from the workflows list

### Step 2: Run Workflow
1. Click the **"Run workflow"** dropdown button
2. Fill in the required information:

#### Version
```
v1.2.0
```
- Use semantic versioning (vX.Y.Z)
- Must match the version in manifest.json
- Examples: v1.2.0, v1.2.1, v1.3.0

#### Release Name
```
TradingView Wishlist Panel
```
- Default is fine, or customize as needed

#### Release Notes
The default notes for v1.2.0 are pre-filled. You can customize them or use the default:

```markdown
## ✨ What's New in v1.2.0

### 🚀 Major Features
- **Dynamic Stock List**: Automatically fetches latest NSE FnO stocks from API
- **Smart Caching**: 24-hour cache for optimal performance
- **Auto-Updates**: Stock list refreshes automatically every 24 hours
- **Fallback Support**: Uses local list.txt as backup if API is unavailable

[... rest of the default notes ...]
```

### Step 3: Execute
1. Click the green **"Run workflow"** button
2. Wait for the workflow to complete (usually 30-60 seconds)
3. Check the workflow run for any errors

### Step 4: Verify Release
1. Go to the **"Releases"** section of your repository
2. You should see a new release with:
   - ✅ Version tag (e.g., v1.2.0)
   - ✅ Release title and notes
   - ✅ Two downloadable assets:
     - `tradingview-wishlist-extension-v1.2.0.zip` (Chrome/Edge/Brave/Opera)
     - `tradingview-wishlist-firefox-v1.2.0.xpi` (Firefox)

---

## 📦 What Gets Packaged

### Files Included
```
extension-package/
├── manifest.json          ✅ Required
├── content.js             ✅ Required
├── popup.js               ✅ Required
├── popup.html             ✅ Required
├── styles.css             ✅ Required
├── list.txt               ✅ Required (fallback)
├── README.md              ✅ Documentation
├── CHANGELOG.md           ✅ Version history
├── browser-polyfill.js    ✅ Cross-browser support
├── icon16.png             ✅ Extension icon
├── icon48.png             ✅ Extension icon
└── icon128.png            ✅ Extension icon
```

### Files Excluded
- ❌ `.git` directory
- ❌ `.github` directory
- ❌ Build scripts (.sh files)
- ❌ Development documentation
- ❌ node_modules (if any)

---

## 🔄 Version Management

### Before Creating a Release

1. **Update manifest.json**
   ```json
   {
     "version": "1.2.0"
   }
   ```

2. **Update CHANGELOG.md**
   ```markdown
   ## [1.2.0] - 2025-12-31
   ### Added
   - Dynamic stock list from API
   ...
   ```

3. **Test the extension**
   - Load in Chrome/Firefox
   - Verify all features work
   - Check console for errors

4. **Commit and push changes**
   ```bash
   git add .
   git commit -m "Release v1.2.0: Dynamic API integration"
   git push origin main
   ```

### Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **Major (X.0.0)**: Breaking changes
  - Example: v2.0.0 (complete rewrite)

- **Minor (0.X.0)**: New features, backwards compatible
  - Example: v1.2.0 (added API integration)

- **Patch (0.0.X)**: Bug fixes, minor changes
  - Example: v1.2.1 (fixed caching bug)

---

## 🛠️ Workflow Configuration

### Trigger
```yaml
on:
  workflow_dispatch:  # Manual trigger only
```

### Permissions
```yaml
permissions:
  contents: write  # Required to create releases
```

### Inputs
- `version`: Release version tag (required)
- `release_name`: Display name (required)
- `release_notes`: Markdown formatted notes (optional)

---

## 🐛 Troubleshooting

### Workflow Fails

**Error: "No files matched the pattern"**
- Ensure all required files exist in the repository
- Check that icon files are present

**Error: "Permission denied"**
- Verify `GITHUB_TOKEN` has write permissions
- Check repository settings → Actions → General → Workflow permissions

**Error: "Tag already exists"**
- Delete the existing tag/release first
- Or use a new version number

### Delete a Release
1. Go to repository → Releases
2. Find the release to delete
3. Click "Delete" button
4. Delete the associated tag as well

### Re-run Workflow
1. Go to Actions → Select the failed workflow run
2. Click "Re-run jobs" → "Re-run all jobs"

---

## 📊 Workflow Steps Explained

### 1. Checkout Code
```yaml
- uses: actions/checkout@v4
```
Downloads the repository code to the runner.

### 2. Create Extension Package
```bash
mkdir -p extension-package
cp manifest.json extension-package/
...
```
Copies all necessary files and creates ZIP/XPI packages.

### 3. Extract Version
```bash
VERSION=$(grep -o '"version": "[^"]*"' manifest.json | cut -d'"' -f4)
```
Automatically reads version from manifest.json.

### 4. Create Packages
```bash
zip -r tradingview-wishlist-extension-v${VERSION}.zip .
zip -r tradingview-wishlist-firefox-v${VERSION}.xpi .
```
Creates versioned packages for both Chrome and Firefox.

### 5. Create Release
```yaml
- uses: softprops/action-gh-release@v2
```
Creates GitHub release with tag and uploads assets.

### 6. Release Summary
```bash
echo "🎉 Release created successfully!"
```
Displays summary in workflow logs.

---

## 📝 Example Workflow Run

```
🎉 Release created successfully!
📦 Version: v1.2.0
📦 Package Version: v1.2.0

📥 Download Links:
  - Chrome/Edge/Brave/Opera: tradingview-wishlist-extension-v1.2.0.zip
  - Firefox: tradingview-wishlist-firefox-v1.2.0.xpi

🔗 Release URL: https://github.com/yourname/pannel/releases/tag/v1.2.0

✨ What's New in v1.2.0:
  - Dynamic stock list from API
  - Smart caching (24 hours)
  - Automatic fallback support
  - Always up-to-date FnO stocks
```

---

## 🔐 Security Considerations

### GITHUB_TOKEN
- Automatically provided by GitHub Actions
- Has permissions based on repository settings
- No manual configuration needed

### Secrets
- No additional secrets required for basic workflow
- If using external services, add secrets in repository settings

---

## 🚀 Advanced Usage

### Automated Releases on Tag Push

To trigger releases automatically when you push a version tag:

```yaml
on:
  push:
    tags:
      - 'v*.*.*'
```

Add this to the workflow file to enable automatic releases when you:
```bash
git tag v1.2.0
git push origin v1.2.0
```

### Pre-release / Beta Versions

For beta releases:
```yaml
prerelease: true  # Mark as pre-release
```

Version format:
```
v1.2.0-beta.1
v1.2.0-rc.1
```

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [softprops/action-gh-release](https://github.com/softprops/action-gh-release)

---

**Need Help?**  
Check the workflow run logs in the Actions tab for detailed error messages.

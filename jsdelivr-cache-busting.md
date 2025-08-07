# jsDelivr Cache Busting Guide

## The Problem
jsDelivr aggressively caches files, which means updates to your files might not appear immediately.

## Solutions

### 1. Use Version Tags (Recommended)
Instead of using `@main`, use specific commit hashes or tags:

```html
<!-- Instead of this (cached aggressively): -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/js/landing-page.js"></script>

<!-- Use this (cache busted): -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@v1.0.0/js/landing-page.js"></script>
```

### 2. Use Commit Hashes
Get the latest commit hash and use it:

```bash
git rev-parse HEAD
# Output: abc123def456...

# Then use in your code:
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@abc123def456/js/landing-page.js"></script>
```

### 3. Force Cache Bust with Query Parameters
Add a version parameter:

```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/js/landing-page.js?v=1.0.1"></script>
```

### 4. Use Minified Files (Better Caching)
Minified files are cached differently and often update faster:

```html
<!-- Use minified versions -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/landing-page.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/css/landing-page.min.css">
```

## Recommended Workflow

### For Development:
```html
<!-- Use main branch for quick testing -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/js/landing-page.js"></script>
```

### For Production:
```html
<!-- Use versioned tags for stability -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@v1.0.0/dist/js/landing-page.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@v1.0.0/dist/css/landing-page.min.css">
```

## How to Create Tags

```bash
# Create a new version tag
git tag v1.0.0

# Push the tag to GitHub
git push origin v1.0.0

# List all tags
git tag

# Delete a tag if needed
git tag -d v1.0.0
git push origin --delete v1.0.0
```

## Quick Cache Bust Script

Create a script to automatically update your Webflow code with the latest commit hash:

```bash
#!/bin/bash
# cache-bust.sh

COMMIT_HASH=$(git rev-parse --short HEAD)
echo "Latest commit: $COMMIT_HASH"

# Update your Webflow custom code with:
echo "Use this URL:"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/js/landing-page.js"
```

## File Size Comparison

| File | Original | Minified | Reduction |
|------|----------|----------|-----------|
| landing-page.js | ~4.5KB | ~3.7KB | 18% |
| global-components.js | ~1.2KB | ~0.6KB | 50% |
| partners-parallax.js | ~0.8KB | ~0.5KB | 38% |
| blog-toc.js | ~2.1KB | ~1.0KB | 52% |
| landing-page.css | ~2.1KB | ~1.2KB | 43% |

## Best Practices

1. **Use tags for production** - More stable and predictable
2. **Use minified files** - Better performance and caching
3. **Test with main branch** - For quick development iterations
4. **Version your releases** - Create tags for major updates
5. **Monitor file sizes** - Keep files lean for faster loading

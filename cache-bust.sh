#!/bin/bash

echo "🚀 jsDelivr Cache Busting Helper"
echo "=================================="

# Get the latest commit hash
COMMIT_HASH=$(git rev-parse --short HEAD)
echo "📝 Latest commit: $COMMIT_HASH"
echo ""

echo "🔗 Use these URLs in your Webflow custom code:"
echo ""

echo "📄 Development (latest changes):"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/js/landing-page.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/js/global-components.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/js/partners-parallax.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/js/blog-toc.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/css/landing-page.css"
echo ""

echo "⚡ Production (minified):"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/dist/js/landing-page.min.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/dist/js/global-components.min.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/dist/js/partners-parallax.min.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/dist/js/blog-toc.min.js"
echo "https://cdn.jsdelivr.net/gh/omnishelfio/website@$COMMIT_HASH/dist/css/landing-page.min.css"
echo ""

echo "💡 Tip: Use these URLs instead of @main to force cache refresh!"

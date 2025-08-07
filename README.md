# Website JavaScript Files

This repository contains JavaScript files for your Webflow website. The files are served via jsDelivr CDN to keep your Webflow footer clean and make code management easier.

## How to Use

### 1. Script Usage

To use the JavaScript files in your Webflow site, add these script tags to your page's custom code section:

#### **Development (Latest Changes)**
Use these URLs for immediate updates (cache busted):

**For landing page functionality:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/landing-page.js"></script>
```

**For global components (marquee logos and carousels):**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/global-components.js"></script>
```

**For partners parallax scrolling:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/partners-parallax.js"></script>
```

**For blog table of contents and read time:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/blog-toc.js"></script>
```

**For landing page styles:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/css/landing-page.css">
```

#### **Production (Minified - Recommended)**
Use these URLs for better performance:

**For landing page functionality:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/landing-page.min.js"></script>
```

**For global components:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/global-components.min.js"></script>
```

**For partners parallax scrolling:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/partners-parallax.min.js"></script>
```

**For blog table of contents:**
```html
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/blog-toc.min.js"></script>
```

**For landing page styles:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/css/landing-page.min.css">
```

### 2. File Structure

```
js/
├── landing-page.js        # Main landing page functionality
├── global-components.js   # Global reusable components
├── partners-parallax.js   # Partners parallax scrolling
├── blog-toc.js           # Blog table of contents and read time
└── (future files)         # Additional page-specific scripts

css/
├── landing-page.css      # Landing page styles and video theme
└── (future files)         # Additional page-specific styles

dist/                     # Minified production files
├── css/
│   └── landing-page.min.css
└── js/
    ├── landing-page.min.js
    ├── global-components.min.js
    ├── partners-parallax.min.js
    └── blog-toc.min.js
```

### 3. Features Included

The JavaScript files include:

**`landing-page.js`:**
- **Video Player Controls**: Play/pause functionality for Video.js player
- **Step-based ScrollTrigger**: Interactive step navigation with scroll animations
- **Card Toggle Functionality**: Toggle between "with" and "without" card states

**`global-components.js`:**
- **Marquee Logo Track**: Auto-scrolling logo animation using GSAP (global)
- **Embla Carousel**: Carousel functionality with navigation (global)

**`partners-parallax.js`:**
- **Partners Parallax**: Smooth parallax scrolling for partner sections (global)

**`blog-toc.js`:**
- **Read Time Calculation**: Automatically calculates and displays reading time
- **Table of Contents**: Generates TOC from H2 headings with smooth navigation
- **Scroll Sync**: Highlights current section as user scrolls

### 4. Dependencies

Make sure these libraries are loaded before the landing page script:

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

<!-- Video.js (if using video player) -->
<script src="https://vjs.zencdn.net/8.6.1/video.min.js"></script>
<link href="https://vjs.zencdn.net/8.10.0/video-js.css" rel="stylesheet" />

<!-- Embla Carousel (if using carousel) -->
<script src="https://unpkg.com/embla-carousel/embla-carousel.umd.js"></script>
```

### 5. Development Workflow

1. **Edit files locally** in the `js/` directory
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update landing page functionality"
   git push origin main
   ```
3. **jsDelivr automatically serves** the latest version from your main branch

### 6. Minification & Build Process

For production, you can minify your files to reduce file sizes:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build minified files:**
   ```bash
   npm run build
   ```

3. **Use minified versions in production:**
   ```html
   <!-- Minified versions -->
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/landing-page.min.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/css/landing-page.min.css">
   ```

**Build Scripts:**
- `npm run build` - Build all minified files
- `npm run build:css` - Build minified CSS only
- `npm run build:js` - Build minified JS only
- `npm run clean` - Remove dist folder

**File Size Comparison:**
| File | Original | Minified | Reduction |
|------|----------|----------|-----------|
| landing-page.js | ~4.5KB | ~3.7KB | 18% |
| global-components.js | ~1.2KB | ~0.6KB | 50% |
| partners-parallax.js | ~0.8KB | ~0.5KB | 38% |
| blog-toc.js | ~2.1KB | ~1.0KB | 52% |
| landing-page.css | ~2.1KB | ~1.2KB | 43% |

### 7. Cache Busting & Updates

**Problem**: jsDelivr aggressively caches `@main` branch files, so updates might not appear immediately.

**Solutions**:

1. **Use commit hashes** (current approach):
   ```html
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/landing-page.js"></script>
   ```

2. **Use the cache bust script**:
   ```bash
   ./cache-bust.sh
   ```

3. **Use version tags** for stable releases:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

4. **Use minified files** (better caching):
   ```html
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/dist/js/landing-page.min.js"></script>
   ```

### 8. Version Control

- Use semantic commit messages
- Test changes locally before pushing
- Consider using branches for major features
- Tag releases for stable versions

### 9. Adding New Pages

To add JavaScript for other pages:

1. Create a new file in the `js/` directory (e.g., `about-page.js`)
2. Add the script tag to your Webflow page:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/about-page.js"></script>
   ```

### 10. Benefits

- ✅ Clean Webflow footer
- ✅ Version control for your JavaScript
- ✅ Fast CDN delivery via jsDelivr
- ✅ Easy maintenance and updates
- ✅ Automatic caching and optimization
- ✅ Minified files for production
- ✅ Cache busting solutions
- ✅ Build automation

## Getting Started

1. **Copy the script tags** from the sections above (use the cache-busted URLs)
2. **Add the script tags** to your Webflow pages
3. **Ensure all dependencies** are loaded
4. **Test functionality** on your live site

## Quick Start Commands

```bash
# Get latest cache-busted URLs
./cache-bust.sh

# Build minified files
npm run build

# Clean build files
npm run clean
```

## Support

If you need to make changes:
1. Edit the files in this repository
2. Commit and push to GitHub
3. Run `./cache-bust.sh` to get the latest URLs
4. Update your Webflow custom code with the new URLs

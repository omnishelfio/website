# OmniShelf Website JavaScript & CSS Files

This repository contains JavaScript and CSS files for your Webflow website. Files are served via jsDelivr CDN to keep your Webflow footer clean and make code management easier.

---

## 📁 File Structure

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

---

## 🚀 Quick Start

### 1. Dependencies
Add these libraries to your Webflow page before your custom scripts:

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

### 2. Script Tags
Add these to your Webflow page's custom code section:

#### **Development (Latest Changes)**
Use these URLs for immediate updates (cache busted):

```html
<!-- Landing page functionality -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/landing-page.js"></script>

<!-- Global components (marquee logos and carousels) -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/global-components.js"></script>

<!-- Partners parallax scrolling -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/partners-parallax.js"></script>

<!-- Blog table of contents and read time -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/blog-toc.js"></script>

<!-- Landing page styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/css/landing-page.css">
```

#### **Production (Minified - Recommended)**
Use these URLs for better performance:

```html
<!-- Landing page functionality -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/landing-page.min.js"></script>

<!-- Global components -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/global-components.min.js"></script>

<!-- Partners parallax scrolling -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/partners-parallax.min.js"></script>

<!-- Blog table of contents -->
<script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/blog-toc.min.js"></script>

<!-- Landing page styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/css/landing-page.min.css">
```

---

## 📋 Features Included

### **`landing-page.js`**
- **Video Player Controls**: Play/pause functionality for Video.js player
- **Step-based ScrollTrigger**: Interactive step navigation with scroll animations
- **Card Toggle Functionality**: Toggle between "with" and "without" card states

### **`global-components.js`**
- **Marquee Logo Track**: Auto-scrolling logo animation using GSAP (global)
- **Embla Carousel**: Carousel functionality with navigation (global)

### **`partners-parallax.js`**
- **Partners Parallax**: Smooth parallax scrolling for partner sections (global)

### **`blog-toc.js`**
- **Read Time Calculation**: Automatically calculates and displays reading time
- **Table of Contents**: Generates TOC from H2 headings with smooth navigation
- **Scroll Sync**: Highlights current section as user scrolls

### **`landing-page.css`**
- **Vertical Steps Styling**: Complete styling for step-based navigation
- **Video.js OmniShelf Theme**: Custom blue theme for video player
- **Mobile Responsive**: Optimized for all screen sizes
- **Smooth Animations**: Professional transitions and effects

---

## ⚡ Performance Optimization

### File Size Comparison
| File | Original | Minified | Reduction |
|------|----------|----------|-----------|
| landing-page.js | ~4.5KB | ~3.7KB | 18% |
| global-components.js | ~1.2KB | ~0.6KB | 50% |
| partners-parallax.js | ~0.8KB | ~0.5KB | 38% |
| blog-toc.js | ~2.1KB | ~1.0KB | 52% |
| landing-page.css | ~2.1KB | ~1.2KB | 43% |

### Build Process
```bash
# Install dependencies
npm install

# Build minified files
npm run build

# Clean build files
npm run clean
```

**Build Scripts:**
- `npm run build` - Build all minified files
- `npm run build:css` - Build minified CSS only
- `npm run build:js` - Build minified JS only
- `npm run clean` - Remove dist folder

---

## 🔄 Cache Busting & Updates

### The Problem
jsDelivr aggressively caches `@main` branch files, so updates might not appear immediately.

### Solutions

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
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@main/dist/js/landing-page.min.js"></script>
   ```

---

## 🛠️ Development Workflow

### 1. Make Changes
Edit files in the `js/` and `css/` directories

### 2. Build Minified Files
```bash
npm run build
```

### 3. Commit and Push
```bash
git add .
git commit -m "Update landing page functionality"
git push origin main
```

### 4. Get Latest URLs
```bash
./cache-bust.sh
```

### 5. Update Webflow
Copy the new URLs to your Webflow custom code

---

## 📝 Adding New Pages

To add JavaScript for other pages:

1. Create a new file in the `js/` directory (e.g., `about-page.js`)
2. Add the script tag to your Webflow page:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/omnishelfio/website@9ef757d/js/about-page.js"></script>
   ```

---

## ✅ Benefits

- ✅ **Clean Webflow footer** - No bulky JavaScript in custom code
- ✅ **Version control** - Track all your JavaScript changes
- ✅ **Fast CDN delivery** - jsDelivr serves files globally
- ✅ **Easy maintenance** - Simple updates and rollbacks
- ✅ **Automatic caching** - Optimized performance
- ✅ **Minified files** - Production-ready optimization
- ✅ **Cache busting** - Immediate update solutions
- ✅ **Build automation** - Streamlined workflow

---

## 🚀 Quick Commands

```bash
# Get latest cache-busted URLs
./cache-bust.sh

# Build minified files
npm run build

# Clean build files
npm run clean

# Check git status
git status
```

---

## 📞 Support

If you need to make changes:
1. Edit the files in this repository
2. Commit and push to GitHub
3. Run `./cache-bust.sh` to get the latest URLs
4. Update your Webflow custom code with the new URLs

For cache issues, use the commit hash URLs instead of `@main` for immediate updates.

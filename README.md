# Website JavaScript Files

This repository contains JavaScript files for your Webflow website. The files are served via jsDelivr CDN to keep your Webflow footer clean and make code management easier.

## How to Use

### 1. Script Usage

To use the JavaScript files in your Webflow site, add these script tags to your page's custom code section:

**For landing page functionality:**
```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/website@main/js/landing-page.js"></script>
```

**For global components (marquee logos and carousels):**
```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/website@main/js/global-components.js"></script>
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### 2. File Structure

```
js/
├── landing-page.js        # Main landing page functionality
├── global-components.js   # Global reusable components
└── (future files)         # Additional page-specific scripts
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

### 4. Dependencies

Make sure these libraries are loaded before the landing page script:

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

<!-- Video.js (if using video player) -->
<script src="https://vjs.zencdn.net/8.6.1/video.min.js"></script>

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

### 6. Version Control

- Use semantic commit messages
- Test changes locally before pushing
- Consider using branches for major features
- Tag releases for stable versions

### 7. Adding New Pages

To add JavaScript for other pages:

1. Create a new file in the `js/` directory (e.g., `about-page.js`)
2. Add the script tag to your Webflow page:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/website@main/js/about-page.js"></script>
   ```

### 8. Benefits

- ✅ Clean Webflow footer
- ✅ Version control for your JavaScript
- ✅ Fast CDN delivery via jsDelivr
- ✅ Easy maintenance and updates
- ✅ Automatic caching and optimization

## Getting Started

1. Replace `YOUR_USERNAME` in the script tags with your GitHub username
2. Add the script tags to your Webflow pages
3. Ensure all dependencies are loaded
4. Test functionality on your live site

## Support

If you need to make changes:
1. Edit the files in this repository
2. Commit and push to GitHub
3. The changes will be live within a few minutes via jsDelivr

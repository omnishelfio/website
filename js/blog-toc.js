// Blog Table of Contents
// This file contains table of contents functionality and read time calculation
// Can be used on blog pages with .blog-rich-text and .table-of-content elements

document.addEventListener("DOMContentLoaded", function() {
  // ──────────────────────────────────────────────────────────────
  // Read Time Calculation
  // ──────────────────────────────────────────────────────────────
  const richTextBlock = document.querySelector('.blog-rich-text');
  const readTimeContainer = document.querySelector('.read-time');
  
  if (richTextBlock && readTimeContainer) {
    // Function to calculate read time
    function calculateReadTime(text) {
      const wordsPerMinute = 200; // Average reading speed
      const textLength = text.trim().split(/\s+/).length; // Split by spaces and count words
      const time = Math.ceil(textLength / wordsPerMinute); // Calculate time in minutes
      return time;
    }
    
    // Get the text content from the rich text block
    const textContent = richTextBlock.innerText || richTextBlock.textContent;
    
    // Calculate the read time
    const readTime = calculateReadTime(textContent);
    
    // Display the read time
    readTimeContainer.textContent = `${readTime} minute${readTime > 1 ? 's' : ''}`;
  }

  // ──────────────────────────────────────────────────────────────
  // Table of Contents Generation and Navigation
  // ──────────────────────────────────────────────────────────────
  const sidebarMenu = document.querySelector('.table-of-content');
  
  if (!richTextBlock || !sidebarMenu) return;

  // Collect all H2s
  const h2Elements = Array.from(richTextBlock.querySelectorAll('h2'));
  h2Elements.forEach((h2, index) => {
    const id = `h2-heading-${index}`;
    h2.id = id;
  });

  // Build simple TOC list
  sidebarMenu.innerHTML = h2Elements.map((h2, i) => `
    <div class="toc-h2" data-id="h2-heading-${i}">
      <span>${h2.textContent}</span>
    </div>
  `).join('');

  // Scroll to section and highlight on click
  sidebarMenu.querySelectorAll('.toc-h2').forEach((el, i) => {
    el.addEventListener('click', function() {
      const id = el.getAttribute('data-id');
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
        highlightH2(i);
      }
    });
  });

  // Highlight current H2 in view
  function highlightH2(indexInView) {
    sidebarMenu.querySelectorAll('.toc-h2').forEach((el, i) => {
      if (i === indexInView) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    });
  }

  // On scroll, update TOC highlight
  function syncTOCWithScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const buffer = 130;
    let h2InViewIndex = 0;

    h2Elements.forEach((h2, i) => {
      if (h2.offsetTop - buffer <= scrollY) {
        h2InViewIndex = i;
      }
    });

    highlightH2(h2InViewIndex);
  }

  window.addEventListener('scroll', syncTOCWithScroll);

  // Initial highlight
  highlightH2(0);
});

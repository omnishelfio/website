// Partners Parallax
// This file contains parallax scrolling functionality for partner sections
// Can be used on any page with parallax-container and parallax-image elements

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.parallax-container');
  const image = document.querySelector('.parallax-image');

  if (container && image) {
    window.addEventListener('scroll', function() {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      let visibleRatio = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        visibleRatio = 1 - Math.abs((rect.top + rect.height/2 - windowHeight/2) / (windowHeight/2 + rect.height/2));
        visibleRatio = Math.max(0, Math.min(1, visibleRatio));
      }
      // Parallax: up as you scroll down, down as you scroll up
      const offset = (visibleRatio - 1) * 40;
      image.style.transform = `translateY(${offset}px)`;
    });
  }
});

// Global Components JavaScript
// This file contains reusable components that can be used across the website
// Includes: Marquee Logo Track and Embla Carousel

document.addEventListener("DOMContentLoaded", function () {
  // ──────────────────────────────────────────────────────────────
  // Marquee Logo Track (Auto-Scroll)
  // ──────────────────────────────────────────────────────────────
  const track = document.getElementById("logo-track");
  if (track) {
    const logos = Array.from(track.children);
    const logoWidth = logos.reduce((acc, logo) => acc + logo.offsetWidth + 80, 0);
    const viewportWidth = window.innerWidth;

    let minTrackWidth = viewportWidth * 2;
    let currentWidth = logoWidth;

    while (currentWidth < minTrackWidth) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });
      currentWidth += logoWidth;
    }

    const totalWidth = track.scrollWidth;
    const speed = 20;

    gsap.to(track, {
      x: `-=${totalWidth}`,
      ease: "none",
      duration: totalWidth / speed,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Embla Carousel
  // ──────────────────────────────────────────────────────────────
  const emblaNode = document.querySelector('.embla__viewport');
  if (emblaNode) {
    const embla = EmblaCarousel(emblaNode, { loop: true, align: "start"});

    const nextButton = document.querySelector('.another-next');
    if (nextButton) {
      nextButton.addEventListener('click', () => embla.scrollNext());
    }
  }
});

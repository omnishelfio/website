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

    // Clone logos to create seamless loop
    // We need enough logos to fill the viewport plus one full set
    const logosToClone = Math.ceil((viewportWidth + logoWidth) / logoWidth);
    
    for (let i = 0; i < logosToClone; i++) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });
    }

    // Create seamless infinite scroll
    const totalWidth = track.scrollWidth;
    const speed = 20;
    const duration = totalWidth / speed;

    // Use a timeline for better control
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(track, {
      x: -logoWidth,
      ease: "none",
      duration: duration,
      onComplete: () => {
        // Reset position seamlessly
        gsap.set(track, { x: 0 });
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

// Landing Page JavaScript
// This file contains all the interactive functionality for the landing page

document.addEventListener("DOMContentLoaded", function () {
  // ──────────────────────────────────────────────────────────────
  // Video Player Controls
  // ──────────────────────────────────────────────────────────────
  const player = videojs('omni-player');

  // PLAY button
  const playBtn = document.getElementById('play-video');
  if (playBtn) {
    playBtn.addEventListener('click', function () {
      player.play(); // Play the video
    });
  }

  // CLOSE/PAUSE button
  const closeBtn = document.getElementById('close-video');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      player.pause(); // Pause the video
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Step-based ScrollTrigger Logic
  // ──────────────────────────────────────────────────────────────
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const steps = document.querySelectorAll(".step-item");
  const images = document.querySelectorAll(".step-image.desktop");
  const indicators = document.querySelectorAll(".indicator-dot");

  // Only run if we have steps elements
  if (steps.length > 0) {
    function activate(idx) {
      steps.forEach((el, i) => el.classList.toggle("active", i === idx));
      images.forEach((img, i) => img.classList.toggle("active", i === idx));
      indicators.forEach((dot, i) => dot.classList.toggle("active", i === idx));
    }

    activate(0); // Default step

    const isMobile = window.innerWidth <= 991;

    if (!isMobile) {
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => activate(i),
          onEnterBack: () => activate(i),
        });
      });

      const stepsWrapper = document.querySelector(".steps-column");
      const stepsContainer = document.querySelector(".steps-container");

      // Only run if both elements exist
      if (stepsWrapper && stepsContainer) {
        window.addEventListener("load", () => {
          const scrollAmount = stepsContainer.scrollWidth - stepsContainer.clientWidth;

          stepsWrapper.style.height = `${stepsContainer.scrollWidth}px`;

          gsap.to(stepsContainer, {
            x: () => `-${scrollAmount}`,
            ease: "none",
            scrollTrigger: {
              trigger: stepsWrapper,
              start: "top top",
              end: () => `+=${scrollAmount}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });
        });
      }
    }
  }

  // Only add click handlers if indicators exist
  if (indicators.length > 0) {
    indicators.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = +dot.dataset.step - 1;
        gsap.to(window, {
          duration: 0.6,
          scrollTo: {
            y: `#step-${idx + 1}`,
            offsetY: window.innerHeight / 2,
          },
        });
      });
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Card Toggle Functionality
  // ──────────────────────────────────────────────────────────────
  const withCard = document.querySelector(".with-card");
  const withoutCard = document.querySelector(".without-card");

  function activateCard(cardToShow, cardToHide) {
    cardToShow.classList.add("active");
    cardToShow.classList.remove("inactive");

    cardToHide.classList.remove("active");
    cardToHide.classList.add("inactive");
  }

  if (withCard && withoutCard) {
    withCard.addEventListener("click", () => {
      activateCard(withCard, withoutCard);
    });

    withoutCard.addEventListener("click", () => {
      activateCard(withoutCard, withCard);
    });

    // Start with WITH OMNISHELF by default
    activateCard(withCard, withoutCard);
  }
});

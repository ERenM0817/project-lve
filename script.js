document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".app");
  const bouquet = document.getElementById("bouquet");
  const hint = document.getElementById("hint");
  const header = document.querySelector(".valentine-header");

  // Initial state: not bloomed
  let hasBloomed = false;

  // Ensure slightly dark feel initially
  document.body.classList.add("initial-dark");

  const triggerBloom = () => {
    if (hasBloomed) return;
    hasBloomed = true;

    // Step 1: mark as blooming (transitional state)
    app.classList.add("blooming");

    // After the animation duration, settle into the bloomed resting state
    const duration = 1400;
    window.setTimeout(() => {
      app.classList.remove("blooming");
      app.classList.add("bloomed");
      document.body.classList.remove("initial-dark");
      if (hint) {
        hint.style.display = "none";
      }
       // Reveal the Valentine message slightly after the bloom completes
      if (header) {
        header.classList.add("visible");
      }
    }, duration);
  };

  if (bouquet) {
    bouquet.addEventListener("click", triggerBloom);
    bouquet.addEventListener("touchstart", (e) => {
      e.preventDefault();
      triggerBloom();
    });
  }
});


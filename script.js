document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".app");
  const rose = document.getElementById("rose");
  const hint = document.getElementById("hint");
  const header = document.querySelector(".valentine-header");

  let hasBloomed = false;

  // Start with a dim night feel
  document.body.classList.add("initial-dark");

  const triggerBloom = () => {
    if (hasBloomed) return;
    hasBloomed = true;

    app.classList.add("blooming");

    const duration = 1700;

    window.setTimeout(() => {
      app.classList.remove("blooming");
      app.classList.add("bloomed");
      document.body.classList.remove("initial-dark");

      if (hint) {
        hint.style.display = "none";
      }
      if (header) {
        header.classList.add("visible");
      }
    }, duration);
  };

  if (rose) {
    rose.addEventListener("click", triggerBloom);
    rose.addEventListener("touchstart", (e) => {
      e.preventDefault();
      triggerBloom();
    });
  }
});


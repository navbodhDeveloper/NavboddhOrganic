export function scrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150; // trigger before fully in view

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // optional: re-trigger when scrolling up
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger once in case some elements already in view
}

// Smooth scroll effect for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple fade-in effect when scrolling
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

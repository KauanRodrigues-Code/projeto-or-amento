gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero-image", { scale: 0.9, opacity: 0, delay: 0.3 });

gsap.from(".feature", {
  scrollTrigger: ".features",
  y: 30,
  opacity: 0,
  stagger: 0.15
});

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

toggle.onclick = () => {
  const theme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
  toggle.textContent = theme === "dark" ? "🌙" : "☀️";
};
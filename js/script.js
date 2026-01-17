const menuToggle = document.getElementById("EQ-menuToggle");
const navLinks = document.getElementById("EQ-navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

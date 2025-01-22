const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

// Open Menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

// Close Menu
menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    mobileMenu.classList.add("translate-x-full"); // Close the menu on link click (for mobile)
  });
});

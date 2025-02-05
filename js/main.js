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
    const targetElement = document.querySelector(this.getAttribute("href"));
    const headerOffset = 70; // Adjust this based on your navbar height

    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Close the mobile menu
    mobileMenu.classList.add("translate-x-full");
  });
});



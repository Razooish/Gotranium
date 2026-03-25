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

document.addEventListener("click", (event) => {
  const isMenuOpen = !mobileMenu.classList.contains("translate-x-full");
  if (!isMenuOpen) {
    return;
  }

  const clickedInsideMenu = mobileMenu.contains(event.target);
  const clickedMenuToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuToggle) {
    mobileMenu.classList.add("translate-x-full");
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
      return;
    }

    const targetElement = document.querySelector(href);
    if (!targetElement) {
      return;
    }

    e.preventDefault();
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



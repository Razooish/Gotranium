function createSprinkles() {
    const oursSection = document.getElementById("ours");
  
    setInterval(() => {
      const sprinkle = document.createElement("div");
      sprinkle.classList.add("sprinkle");
  
      // Set random size for the sprinkle
      const size = Math.random() * 5 + 3; // Between 3px and 8px
      sprinkle.style.width = `${size}px`;
      sprinkle.style.height = `${size}px`;
  
      // Set random position for the sprinkle
      sprinkle.style.left = `${Math.random() * 100}%`;
      sprinkle.style.top = `${Math.random() * 100}%`;
  
      // Set random animation duration and directions
      const duration = Math.random() * 5 + 3; // Between 3s and 8s
      const xDirection = Math.random() * 2 - 1; // Random direction (-1 to 1)
      const yDirection = Math.random() * 2 - 1; // Random direction (-1 to 1)
      sprinkle.style.animationDuration = `${duration}s`;
      sprinkle.style.setProperty("--x-dir", xDirection);
      sprinkle.style.setProperty("--y-dir", yDirection);
  
      // Append sprinkle to the ours section
      oursSection.appendChild(sprinkle);
  
      // Remove sprinkle after animation ends
      setTimeout(() => {
        sprinkle.remove();
      }, duration * 1000);
    }, 500); // Generate a sprinkle every 500ms
  }
  
  // Initialize sprinkles on page load
  createSprinkles();
  
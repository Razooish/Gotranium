function rate(stars) {
  // Save rating to localStorage
  localStorage.setItem("userRating", stars);

  // Reset and update stars
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star${i}`);
    star.classList.remove("fas", "far");
    star.classList.add(i <= stars ? "fas" : "far");
  }

  // Update feedback message
  const feedback = document.getElementById("rating-feedback");
  feedback.textContent = `You rated us ${stars} ${
    stars > 1 ? "stars" : "star"
  }. Thank you!`;
  feedback.classList.add("text-green-500");
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
  const savedRating = localStorage.getItem("userRating");
  const feedback = document.getElementById("rating-feedback");

  if (savedRating) {
    rate(parseInt(savedRating));
  } else {
    // Set default appearance and message
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star${i}`);
      star.classList.remove("fas");
      star.classList.add("far");
    }
    feedback.classList.remove("text-green-500");
  }
});

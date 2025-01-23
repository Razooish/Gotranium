function rate(stars) {
    // Reset all stars
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star${i}`);
      star.classList.remove("fas", "far");
      star.classList.add(i <= stars ? "fas" : "far");
    }
    // Display feedback
    const feedback = document.getElementById("rating-feedback");
    feedback.textContent = `You rated us ${stars} ${stars > 1 ? "stars" : "star"}. Thank you!`;
    feedback.classList.add("text-green-500");
  }

  rate(5); // Default rating
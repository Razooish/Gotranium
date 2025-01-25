// Get all relevant DOM elements
const cardsContainer = document.getElementById('cards-container');
const readMoreButtons = document.querySelectorAll('.read-more-btn');
const backButton = document.getElementById('back-btn');

// Add click event to all "Read More" buttons
readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all cards except the selected one
    cardsContainer.querySelectorAll('.card').forEach((card, cardIndex) => {
      if (index !== cardIndex) {
        card.classList.add('hidden');
      }
    });

    // Show the detailed content for the selected card
    const details = button.nextElementSibling;
    if (details) {
      details.classList.remove('hidden');
    }

    // Show the back button
    backButton.classList.remove('hidden');
  });
});

// Add click event to the "Back" button
backButton.addEventListener('click', () => {
  // Show all cards
  cardsContainer.querySelectorAll('.card').forEach((card) => {
    card.classList.remove('hidden');
    card.querySelector('.card-details').classList.add('hidden');
  });

  // Hide the back button
  backButton.classList.add('hidden');
});

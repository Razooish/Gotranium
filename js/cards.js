// Get all relevant DOM elements
const cardsContainer = document.getElementById('cards-container');
const backButton = document.getElementById('back-btn');

// Function to add event listeners to all "Read More" buttons
function initializeReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card'); // Get the parent card
      const details = button.nextElementSibling; // Get the detailed content

      if (button.textContent === 'Read More') {
        // Hide all cards except the selected one
        cardsContainer.querySelectorAll('.card').forEach((otherCard, cardIndex) => {
          if (index !== cardIndex) {
            otherCard.classList.add('hidden');
          }
        });

        // Show the detailed content for the selected card
        if (details) {
          details.classList.remove('hidden');
        }

        // Update button text to "Read Less"
        button.textContent = 'Read Less';

        // Show the back button
        backButton.classList.remove('hidden');
      } else {
        // Reset to the default state
        resetCards();
      }
    });
  });
}

// Add click event to the "Back" button
backButton.addEventListener('click', resetCards);

// Function to reset all cards to the default state
function resetCards() {
  // Show all cards and hide their details
  cardsContainer.querySelectorAll('.card').forEach((card) => {
    card.classList.remove('hidden');
    const details = card.querySelector('.card-details');
    if (details) {
      details.classList.add('hidden');
    }
    // Reset the button text to "Read More"
    const readMoreButton = card.querySelector('.read-more-btn');
    if (readMoreButton) {
      readMoreButton.textContent = 'Read More';
    }
  });

  // Hide the back button
  backButton.classList.add('hidden');
}

// Initialize the "Read More" buttons
initializeReadMoreButtons();

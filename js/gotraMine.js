
const mineCasteInputField = document.getElementById("mine-caste");
const mineCasteSuggestionBox = document.getElementById("mine-caste-suggestions");
const mineGotraResult = document.getElementById("result-mine");

// Event listener for input in the Mine Gotra section
mineCasteInputField.addEventListener("input", () => {
  const query = mineCasteInputField.value.toLowerCase();
  mineCasteSuggestionBox.innerHTML = "";
  mineCasteSuggestionBox.classList.add("hidden");

  if (query) {
    const matches = Object.values(gotraData)
      .flatMap((gotra) =>
        gotra.castes.map((caste) => ({ caste, gotraName: gotra.gotraName }))
      )
      .filter(({ caste }) => caste.toLowerCase().startsWith(query));

    if (matches.length > 0) {
      mineCasteSuggestionBox.classList.remove("hidden");
      matches.forEach(({ caste, gotraName }) => {
        const li = document.createElement("li");
        li.textContent = caste;
        li.classList.add("p-2", "cursor-pointer", "hover:bg-black", "hover:text-white");
        li.addEventListener("click", () => {
          mineCasteInputField.value = caste;
          displayMineGotra(caste, gotraName);
          mineCasteSuggestionBox.classList.add("hidden");
        });
        mineCasteSuggestionBox.appendChild(li);
      });
    }
  }
});

// Function to display the Gotra based on the caste
function displayMineGotra(caste, gotraName) {
  mineGotraResult.innerHTML = `
    <div class="p-4 border rounded bg-gray-100">
      <p class="text-lg">
        <strong>${caste}</strong> belongs to the <strong>${gotraName}</strong> Gotra.
      </p>
    </div>
  `;
}

// Close suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (
    !mineCasteInputField.contains(e.target) &&
    !mineCasteSuggestionBox.contains(e.target)
  ) {
    mineCasteSuggestionBox.classList.add("hidden");
  }
});

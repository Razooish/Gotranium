const gotraData = {
  Kashyap: { castes: ["Sharma", "Acharya", "Dhakal"] },
  Bharadwaj: { castes: ["Ghimire", "Regmi", "Rimal"] },
  Kaushik: { castes: ["Adhikari", "Neupane", "Dulal"] },
  Vashishtha: { castes: ["Bhattarai", "Poudel", "Sigdel"] },
  Atri: { castes: ["Subedi", "Devkota", "Panta"] },
}; // Suggestions logic
const castInputFields = [
  { input: "my-cast", suggestionBox: "my-cast-suggestions" },
  { input: "her-cast", suggestionBox: "her-cast-suggestions" },
];

castInputFields.forEach(({ input, suggestionBox }) => {
  const inputField = document.getElementById(input);
  const suggestionBoxEl = document.getElementById(suggestionBox);

  inputField.addEventListener("input", () => {
    const query = inputField.value.toLowerCase();
    suggestionBoxEl.innerHTML = "";
    suggestionBoxEl.classList.add("hidden");

    if (query) {
      const matches = Object.values(gotraData)
        .flatMap((gotra) => gotra.castes)
        .filter((caste) => caste.toLowerCase().startsWith(query));

      if (matches.length > 0) {
        suggestionBoxEl.classList.remove("hidden");
        matches.forEach((match) => {
          const li = document.createElement("li");
          li.textContent = match;
          li.classList.add("p-2", "cursor-pointer", "hover:bg-black");
          li.addEventListener("click", () => {
            inputField.value = match;
            suggestionBoxEl.classList.add("hidden");
          });
          suggestionBoxEl.appendChild(li);
        });
      }
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!inputField.contains(e.target) && !suggestionBoxEl.contains(e.target)) {
      suggestionBoxEl.classList.add("hidden");
    }
  });
});

// Compatibility check logic
document.getElementById("check-gotra").addEventListener("click", () => {
  const myCast = document.getElementById("my-cast").value.trim();
  const herCast = document.getElementById("her-cast").value.trim();
  const resultDiv = document.getElementById("result");

  let myGotra = null,
    herGotra = null;

  for (const [gotra, details] of Object.entries(gotraData)) {
    if (details.castes.includes(myCast)) myGotra = gotra;
    if (details.castes.includes(herCast)) herGotra = gotra;
  }

  resultDiv.innerHTML = ""; // Clear previous result

  if (!myGotra || !herGotra) {
    resultDiv.textContent =
      "One or both casts not found in our records. Please try again.";
  } else if (myGotra === herGotra) {
    resultDiv.textContent = `Unfortunately, you both belong to the same Gotra (${myGotra}). Marriage is traditionally not recommended.`;
    resultDiv.classList.add("text-red-600");
  } else {
    resultDiv.textContent = `Congratulations! You both belong to different Gotras. Your can marry!`;
    resultDiv.classList.add("text-green-600");
  }
});

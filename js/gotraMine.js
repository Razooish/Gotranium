
const mineCasteInputField = document.getElementById("mine-caste");
const mineCasteSuggestionBox = document.getElementById("mine-caste-suggestions");
const mineGotraResult = document.getElementById("result-mine");
const mineGotraSuccessAudio = new Audio("assets/audio/correct.mp3");

function getMineSearchEntries() {
  if (typeof gotraData === "undefined" || !gotraData) {
    return [];
  }

  return Object.values(gotraData).flatMap((gotra) =>
    gotra.castes.map((caste) => ({
      caste,
      gotraName: gotra.gotraName,
      normalizedCaste: caste.toLowerCase().trim(),
    }))
  );
}

function normalizeMineSearchText(value) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function getMineMatchScore(normalizedCaste, query) {
  if (!query) {
    return Number.POSITIVE_INFINITY;
  }

  if (normalizedCaste === query) {
    return 0;
  }

  if (normalizedCaste.startsWith(query)) {
    return 1;
  }

  const words = normalizedCaste.split(" ");
  if (words.some((word) => word.startsWith(query))) {
    return 2;
  }

  if (normalizedCaste.includes(query)) {
    return 3;
  }

  return Number.POSITIVE_INFINITY;
}

function getRankedMineMatches(query, limit = 25) {
  const normalizedQuery = normalizeMineSearchText(query);
  if (!normalizedQuery) {
    return [];
  }

  const dedupedMatches = new Map();
  const mineSearchEntries = getMineSearchEntries();

  mineSearchEntries.forEach((entry) => {
    const score = getMineMatchScore(entry.normalizedCaste, normalizedQuery);
    if (!Number.isFinite(score)) {
      return;
    }

    const existing = dedupedMatches.get(entry.normalizedCaste);
    if (!existing || score < existing.score) {
      dedupedMatches.set(entry.normalizedCaste, { ...entry, score });
    }
  });

  return Array.from(dedupedMatches.values())
    .sort((a, b) => a.score - b.score || a.caste.length - b.caste.length || a.caste.localeCompare(b.caste))
    .slice(0, limit);
}

function resolveMineCaste(query) {
  const matches = getRankedMineMatches(query, 1);
  if (matches.length === 0) {
    return null;
  }

  return matches[0];
}

// Event listener for input in the Mine Gotra section
mineCasteInputField.addEventListener("input", () => {
  const query = mineCasteInputField.value.toLowerCase();
  mineCasteSuggestionBox.innerHTML = "";
  mineCasteSuggestionBox.classList.add("hidden");

  if (query) {
    const matches = getRankedMineMatches(query);

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

mineCasteInputField.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  const resolvedEntry = resolveMineCaste(mineCasteInputField.value);
  if (!resolvedEntry) {
    return;
  }

  mineCasteInputField.value = resolvedEntry.caste;
  displayMineGotra(resolvedEntry.caste, resolvedEntry.gotraName);
  mineCasteSuggestionBox.classList.add("hidden");
});

// Function to display the Gotra based on the caste
function displayMineGotra(caste, gotraName) {
  mineGotraResult.innerHTML = `
    <div class="p-4 border rounded bg-gray-100">
      <p class="text-lg">
        <strong>${caste}</strong> -----> <strong>${gotraName}</strong> 
      </p>
    </div>
  `;

  mineGotraSuccessAudio.currentTime = 0;
  mineGotraSuccessAudio.play().catch(() => {});
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

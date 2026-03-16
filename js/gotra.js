const gotraData = {
  Kaudinya: {
    gotraName: "Kaudinya",
    castes: [
      "Pyakuryal", "Paneru", "Acharya", "Gaire", "Sapkota",
      "Satyal", "Morasaini", "Parajuli", "Baskota", "Trital",
      "Nyaupane", "Lakai Khadka (Kamalakothe)", "Thapa (Gamle, Bagale)", "Rawal",
    ],
    prawar: ["Kaudinya", "Vashistha", "Maitravaruni"],
  },
  Atri: {
    gotraName: "Atri",
    castes: ["Chapagain", "Wosti", "Mishra", "Khatiwada", "Malla", "Ojha", "Adhikari (Thadarai)", "Gautam"],
    prawar: ["Atri", "Archananasa", "Shyavashva"],
  },
  Aatreya: {
    gotraName: "Aatreya",
    castes: [
      "Duwadi Dulal", "Poudel", "Thapa (Punwar, Khulal, Kalikote, Bagale)",
      "Pani Pokharel", "Kalikote Khadka", "Aryal", "Sigdel", "Gelal",
      "Ghonde Gurung", "Duwadi", "Majhi",
    ],
    prawar: ["Atreya", "Archananasa", "Shyavashva"],
  },
  Upamanyu: {
    gotraName: "Upamanyu",
    castes: ["Mainali", "Dhakal", "Bartoula", "Dweni", "Oli", "Bhatt (Duwaal)", "Pandey"],
    prawar: ["Upamanyu", "Kapila", "Viruj"],
  },
  Kashyap: {
    gotraName: "Kashyap",
    castes: [
      "Shah", "Shahi", "Thakuri", "Rayamajhi", "Ghimire", "Godar Thapa", "Gartoula",
      "Adhikari (Bhandare, Khilchine, Kauwaali)", "Bogati", "Kathayat", "Budhathoki (Sodari)",
      "Pandey (Simladiya, Badakhora)", "Badal", "Chatakuli", "Shrestha", "Limbu", "Rai",
      "Sherpa", "Others Unknown"
    ],
    prawar: ["Kashyap", "Avatsara", "Naidruva"],
  },
  Dhungel: {
    gotraName: "Dhungel",
    castes: ["Dhungel"],
    prawar: ["Agastya", "Dadhyachyuta", "Idmbaha", "Agasti", "Jaimini", "Dadhichi"],
  },
  Kaushik: {
    gotraName: "Kaushik",
    castes: [
      "Regmi", "Khaptari (Khadka)", "Vist (Khaptari)", "Khaptari Budhathoki", "Bidari",
      "Phuyal", "Rimal", "Lamichhane Khadka", "Khaptari Khadka", "Dhungana", "Dhital",
      "Tiwari", "Majhi", "Khaptari Basnet", "Luitel", "Pudasaini", "Baniya", "Raghuwanshi",
      "Bhandari", "Bastakoti", "Dashauliya", "Pathak", "Gauli", "Dangi",
    ],
    prawar: ["Kaushik", "Adhmarsana", "Vishwamitra", "Devrata", "Odal"],
  },
  Garg: {
    gotraName: "Garg",
    castes: [
      "Bastola", "Gajurel", "Bhatt", "Risal", "Lamichhane (Bhatt)", "Bhurtel",
      "Acharya", "Lamichhane Thapa", "Bhetwal", "Lamichhane Gurung", "Rokaha", "Chundal",
      "Joshi (Jhijar)", "Palpali Khadka",
    ],
    prawar: ["Garg", "Gargya", "Gautam", "Vishwamitra", "Parashar"],
  },
  Gautam: {
    gotraName: "Gautam",
    castes: ["Tripathi", "Tiwari", "Chand", "Dangar"],
    prawar: ["Gautam", "Garg", "Shandilya"],
  },
  GhritKaushik: {
    gotraName: "Ghritkaushik",
    castes: ["Sutarkarki", "Baral", "Pandit", "Khanal", "Nepal", "Vardewa"],
    prawar: ["Ghritkaushik", "Vishwamitra"],
  },
  Dhananjaya: {
    gotraName: "Dhananjaya",
    castes: [
      "Homegai", "Humagai", "Rijal", "Pangeni", "Basel", "Kukurkate", "Guragai",
      "Khulal Basnet", "Bhusal", "Khulal Budhathoki", "Gairipipli", "Dhamala", "Pakuwaal",
    ],
    prawar: ["Dhananjaya", "Vishwamitra", "Madhuccchanda"],
  },
  Bharadwaj: {
    gotraName: "Bharadwaj",
    castes: [
      "Chaulagain", "Subedi", "Thapaliya", "Vaidawar Kshetri", "Panthi", "Siluwaal",
      "Vist (Sijapati)", "Wagle", "Lohani", "Pant", "Adhikari (Thami)", "Dudh Pokharel",
      "Shiwakoti", "Devkota", "Nirola", "Jamarkattel", "Khadka (Maharajji)", "Raut",
      "Kanel", "Shripali Basnet", "Pandey (Kuleta)", "Joshi (Latoula)", "Ghale Gurung",
      "Lama Gurung", "Rajouria", "Chimouria", "Burlakoti", "Majgainya", "Sitaula",
      "Bohora", "Sangroula", "Khanigelal",
    ],
    prawar: ["Bharadwaj", "Angiras", "Varhaspatya"],
  },
  Parashar: {
    gotraName: "Parashar",
    castes: ["Marhatha", "Lamakarki", "Arya", "Dhimāl", "Kattel", "Pandit", "Naraal", "Kattel"],
    prawar: ["Parashar", "Vashistha", "Shakti"],
  },
  Maandavya: {
    gotraName: "Mandavya",
    castes: ["Bajgain", "Gyawali", "Katuwal", "Panthi", "Maskebajai"],
    prawar: ["Mandap", "Mandavya", "Vishwamitra"],
  },
  Maudgalya: {
    gotraName: "Maudgalya",
    castes: [
      "Koirala", "Kuinkel", "Thapa (Kalikote)", "Karki (Khulal, Mudula, Lama)",
      "Upreti", "Sinkhada", "Timilsina", "Belkani", "Timalsina", "Belbase",
    ],
    prawar: ["Maudgalya", "Angiras", "Bharmyashva"],
  },
  Vatsa: {
    gotraName: "Vatsa",
    castes: ["Rana", "Lamsal", "Kunwar", "Dahal", "Rupakheti", "Chauhan", "Kharal"],
    prawar: ["Vatsa Aurva", "Chyavan Bhargava", "Jamadagni"],
  },
  Krishnatri: {
    gotraName: "Krishnatri",
    castes: ["Khakurel"],
    prawar: [],
  },
  Jaimini: {
    gotraName: "Jaimini",
    castes: ["Ghodasaini"],
    prawar: ["Jaimini", "Ugra", "Sankriti"],
  },
  Saunak: {
    gotraName: "Saunak",
    castes: ["Sahi"],
    prawar: ["Saunak", "Vishwamitra", "Bhayishva"],
  },
  Vashishtha: {
    gotraName: "Vashishtha",
    castes: [
      "Suyal Gharti", "Gaire Raut", "Bhattarai", "Suyel Thapa", "Duwadi",
      "Thansinghe Bhandari", "Suyal Gharti", "Kharel", "Chalise", "Mudubari",
      "Phalakoti", "Pathak", "Keshari", "Soti",
    ],
    prawar: ["Vashishtha Indrapramada", "Abhardwasu"],
  },
  Shandilya: {
    gotraName: "Shandilya",
    castes: ["Kafle", "Prasai", "Mahat", "Katuwal"],
    prawar: ["Shandilya", "Asita", "Deval", "Savarni", "Isavashya", "Maitrei", "Varun", "Panchapravar"],
  },
  Angiras: {
    gotraName: "Angiras",
    castes: ["Joshi (Silai)", "Sedhain", "Saunak", "Sahi"],
    prawar: ["Saunak", "Vishwamitra", "Bharmyashva"],
  },
  Vishwamitra: {
    gotraName: "Vishwamitra",
    castes: ["Bhatt (Alina)", "Duwadi", "Nirwanshi", "Rayal", "Rai"],
    prawar: [],
  },
  Kushnanjani: {
    gotraName: "Kushnanjani",
    castes: ["Vist (Kamalakothe)", "Kaderiya"],
    prawar: [],
  },
  Kapil: {
    gotraName: "Kapil",
    castes: ["Bohora", "Khadka (Punwar)", "Dani Kshetri (Vist Thapa Khadka)"],
    prawar: [],
  },
  Bhrigu: {
    gotraName: "Bhrigu",
    castes: ["Chauhan"],
    prawar: [],
  },
};






//===================================//
//               Messages             //
//===================================//
const messages = {
  congratulationsText: "Congratulations! You belong to different Gotras. You can marry each other.",
  UnfortunatelyText: "Unfortunately, you both belong to the same Gotra. "
};

//===================================//
//          Input Configuration       //
//===================================//
const castInputFields = [
  { input: "my-cast", suggestionBox: "my-cast-suggestions" },
  { input: "her-cast", suggestionBox: "her-cast-suggestions" },
];

//===================================//
//       Caste Suggestion Logic      //
//===================================//
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

//===================================//
//       Compatibility Checker       //
//===================================//
const resultModal = document.getElementById("result-modal");
const resultModalContent = document.getElementById("result-modal-content");
const resultModalCard = document.getElementById("result-modal-card");
const closeResultModalBtn = document.getElementById("close-result-modal");
const shareResultBtn = document.getElementById("share-result");
const copyResultBtn = document.getElementById("copy-result");
const saveScreenshotBtn = document.getElementById("save-screenshot");

let latestResultText = "";

function renderFoundResult(iconPath, message, messageClass, lineColorClass, myCast, myGotra, herCast, herGotra) {
  return `
    <div class="space-y-4 sm:space-y-5">
      <div class="flex flex-col items-center text-center">
        <div class="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-black border border-gold flex items-center justify-center mb-3">
          <img src="${iconPath}" class="h-9 w-9 sm:h-10 sm:w-10" alt="Result icon" />
        </div>
        <p class="${messageClass} text-sm sm:text-base lg:text-lg leading-relaxed px-1">${message}</p>
      </div>
      <div class="rounded-xl bg-black p-3 sm:p-4 text-center space-y-2">
        <p class="${lineColorClass} text-sm sm:text-base font-semibold break-words">
          <span>${myCast}</span>
          <i class="fas fa-arrow-right mx-2" aria-hidden="true"></i>
          <span>${myGotra}</span>
        </p>
        <p class="${lineColorClass} text-sm sm:text-base font-semibold break-words">
          <span>${herCast}</span>
          <i class="fas fa-arrow-right mx-2" aria-hidden="true"></i>
          <span>${herGotra}</span>
        </p>
      </div>
    </div>
  `;
}

function renderNotFoundResult() {
  return `
    <div class="flex flex-col items-center text-center">
      <div class="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-black border border-gold flex items-center justify-center mb-3">
        <img src="assets/icons/soul-emoji.svg" class="h-9 w-9 sm:h-10 sm:w-10" alt="Not found icon" />
      </div>
      <p class="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed px-1">One or both casts not found in our records. Please try again.</p>
      <p class="text-gray-300 text-sm mt-2">Try selecting names from suggestions for better accuracy.</p>
    </div>
  `;
}

function openResultModal(contentHtml, contentText) {
  resultModalContent.innerHTML = contentHtml;
  latestResultText = contentText;
  resultModal.classList.remove("hidden");
  resultModal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeResultModal() {
  resultModal.classList.add("hidden");
  resultModal.classList.remove("flex");
  document.body.style.overflow = "";
}

closeResultModalBtn.addEventListener("click", closeResultModal);

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeResultModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resultModal.classList.contains("hidden")) {
    closeResultModal();
  }
});

function setTemporaryButtonState(button, tempText, timeout = 1200) {
  const originalText = button.dataset.defaultLabel || button.textContent.trim();
  setButtonTextWithIcon(button, tempText);
  setTimeout(() => {
    setButtonTextWithIcon(button, originalText);
  }, timeout);
}

function setButtonTextWithIcon(button, text) {
  const iconClass = button.dataset.iconClass;
  if (iconClass) {
    button.innerHTML = `<i class="${iconClass} mr-2" aria-hidden="true"></i><span>${text}</span>`;
    return;
  }
  button.textContent = text;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Unable to generate image blob."));
      }
    }, "image/png");
  });
}

function trimTransparentEdges(canvas) {
  const context = canvas.getContext("2d");
  if (!context) {
    return canvas;
  }

  const { width, height } = canvas;
  const imageData = context.getImageData(0, 0, width, height).data;

  let top = height;
  let left = width;
  let right = 0;
  let bottom = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = imageData[(y * width + x) * 4 + 3];
      if (alpha > 0) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }

  if (right <= left || bottom <= top) {
    return canvas;
  }

  const trimmedWidth = right - left + 1;
  const trimmedHeight = bottom - top + 1;
  const trimmedCanvas = document.createElement("canvas");
  trimmedCanvas.width = trimmedWidth;
  trimmedCanvas.height = trimmedHeight;

  const trimmedContext = trimmedCanvas.getContext("2d");
  if (!trimmedContext) {
    return canvas;
  }

  trimmedContext.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
  return trimmedCanvas;
}

async function captureResultScreenshotBlob() {
  if (typeof html2canvas !== "function") {
    throw new Error("Screenshot library not available.");
  }

  const cardBg = getComputedStyle(resultModalCard).backgroundColor || "#262626";

  const canvas = await html2canvas(resultModalCard, {
    scale: 2,
    useCORS: true,
    backgroundColor: cardBg,
    logging: false,
  });

  const cleanedCanvas = trimTransparentEdges(canvas);

  return canvasToBlob(cleanedCanvas);
}

function downloadBlob(blob, fileName) {
  const blobUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = blobUrl;
  downloadLink.download = fileName;
  downloadLink.click();
  URL.revokeObjectURL(blobUrl);
}

async function shareResultScreenshot(buttonElement) {
  try {
    setButtonTextWithIcon(buttonElement, "Loading...");

    const blob = await captureResultScreenshotBlob();
    const screenshotFile = new File([blob], "gotra-result.png", { type: "image/png" });

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [screenshotFile] })
    ) {
      await navigator.share({
        files: [screenshotFile],
      });
      setTemporaryButtonState(buttonElement, "Shared", 1200);
      return;
    }

    downloadBlob(blob, "gotra-result.png");
    setTemporaryButtonState(buttonElement, "Downloaded", 1500);
  } catch (error) {
    setTemporaryButtonState(buttonElement, "Failed", 1500);
  }
}

shareResultBtn.addEventListener("click", async () => {
  await shareResultScreenshot(shareResultBtn);
});

copyResultBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(latestResultText);
    setTemporaryButtonState(copyResultBtn, "Copied", 1200);
  } catch (error) {
    const tempInput = document.createElement("textarea");
    tempInput.value = latestResultText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setTemporaryButtonState(copyResultBtn, "Copied", 1200);
  }
});

saveScreenshotBtn.addEventListener("click", async () => {
  try {
    setButtonTextWithIcon(saveScreenshotBtn, "Loading...");
    const blob = await captureResultScreenshotBlob();
    downloadBlob(blob, "gotra-result.png");
    setTemporaryButtonState(saveScreenshotBtn, "Downloaded", 1200);
  } catch (error) {
    setTemporaryButtonState(saveScreenshotBtn, "Failed", 1200);
  }
});

document.getElementById("check-gotra").addEventListener("click", () => {
  const myCast = document.getElementById("my-cast").value.trim();
  const herCast = document.getElementById("her-cast").value.trim();
  const resultDiv = document.getElementById("result");

  let myGotra = null;
  let herGotra = null;

  for (const [gotra, details] of Object.entries(gotraData)) {
    if (details.castes.includes(myCast)) myGotra = gotra;
    if (details.castes.includes(herCast)) herGotra = gotra;
  }

  const audio = new Audio(); // Audio element for feedback

  resultDiv.classList.add("hidden");

  // Shimmer effect for loading placeholder
  resultDiv.innerHTML = `
    <div class="shimmer-placeholder h-10 w-10 rounded-full inline-block mr-2"></div>
    <span class="text-gray-300">Checking ...</span>
  `;

  setTimeout(() => {
    resultDiv.innerHTML = "";
    let resultHtml = "";
    let resultText = "";

    if (!myGotra || !herGotra) {
      // Cast not found
      resultHtml = renderNotFoundResult();
      resultText = "One or both casts not found in our records. Please try again.";
      audio.src = "assets/audio/error.mp3";
    } else if (myGotra === herGotra) {
      // Same Gotra
      resultHtml = renderFoundResult(
        "assets/icons/sad-emoji.svg",
        messages.UnfortunatelyText,
        "text-red-400 font-semibold",
        "text-red-400",
        myCast,
        myGotra,
        herCast,
        herGotra
      );
      resultText = `${messages.UnfortunatelyText}\n${myCast} → ${myGotra}\n${herCast} → ${herGotra}`;
      audio.src = "assets/audio/lost-sound.mp3";
    } else {
      // Compatible
      resultHtml = renderFoundResult(
        "assets/icons/happy-emoji.svg",
        messages.congratulationsText,
        "text-green-400 font-semibold",
        "text-green-400",
        myCast,
        myGotra,
        herCast,
        herGotra
      );
      resultText = `${messages.congratulationsText}\n${myCast} → ${myGotra}\n${herCast} → ${herGotra}`;
      audio.src = "assets/audio/win-sound.mp3";
    }

    resultDiv.innerHTML = resultHtml;
    openResultModal(resultHtml, resultText);

    audio.play();
  }, 500); // Simulate loading delay
});

//===================================//
//        Input Event Handlers       //
//===================================//
function capitalizeFirstLetter(event) {
  event.target.value = event.target.value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    document.getElementById("check-gotra").click();
  }
}

["my-cast", "her-cast"].forEach((id) => {
  const inputField = document.getElementById(id);
  inputField.addEventListener("input", capitalizeFirstLetter);
  inputField.addEventListener("keypress", handleEnterKeyPress);
});

//===================================//
//           Gotra Table            //
//===================================//
function generateGotraTable(data) {
  const tableBody = document.querySelector("#gotra-table tbody");
  tableBody.innerHTML = ""; // Clear table

  Object.keys(data).forEach((key) => {
    const entry = data[key];
    const row = document.createElement("tr");

    const gotraCell = document.createElement("td");
    gotraCell.textContent = entry.gotraName;
    row.appendChild(gotraCell);

    const castesCell = document.createElement("td");
    const casteList = document.createElement("span");
    casteList.textContent = entry.castes.slice(0, 5).join(" , ");
    castesCell.appendChild(casteList);

    if (entry.castes.length > 5) {
      let currentCount = 5;
      const readMoreBtn = document.createElement("button");
      readMoreBtn.textContent = "Read More";
      readMoreBtn.style.marginLeft = "10px";
      readMoreBtn.style.cursor = "pointer";
      readMoreBtn.style.border = "none";
      readMoreBtn.style.background = "#ffc766";
      readMoreBtn.style.color = "black";
      readMoreBtn.style.padding = "5px 10px";
      readMoreBtn.style.borderRadius = "5px";
      readMoreBtn.addEventListener("click", () => {
        const nextBatch = entry.castes.slice(currentCount, currentCount + 10);
        if (nextBatch.length > 0) {
          casteList.textContent += " , " + nextBatch.join(" , ");
          currentCount += 5;
        }
        if (currentCount >= entry.castes.length) {
          readMoreBtn.style.display = "none";
        }
      });
      castesCell.appendChild(readMoreBtn);
    }

    row.appendChild(castesCell);
    tableBody.appendChild(row);
  });
}

generateGotraTable(gotraData);

//===================================//
//                Quiz               //
//===================================//
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const scoreDiv = document.getElementById("score");
const resetBtn = document.getElementById("reset");
const playAgainBtn = document.getElementById("play-again");
const historyDiv = document.getElementById("history");

let currentQuestion = {};
let score = 0;
let askedQuestions = [];

function getRandomGotra() {
  const gotraKeys = Object.keys(gotraData);
  let randomKey;

  do {
    randomKey = gotraKeys[Math.floor(Math.random() * gotraKeys.length)];
  } while (askedQuestions.includes(randomKey) && askedQuestions.length < gotraKeys.length);

  askedQuestions.push(randomKey);
  return gotraData[randomKey];
}

function generateQuestion() {
  currentQuestion = getRandomGotra();

  let incorrectOptions = Object.values(gotraData)
    .flatMap((g) => g.castes)
    .filter((caste) => !currentQuestion.castes.includes(caste))
    .sort(() => 0.5 - Math.random());

  const correctAnswer = currentQuestion.castes[Math.floor(Math.random() * currentQuestion.castes.length)];
  const allOptions = [correctAnswer, ...incorrectOptions.slice(0, 3)].sort(() => 0.5 - Math.random());

  renderQuestion(currentQuestion.gotraName, allOptions, correctAnswer);
}

function renderQuestion(gotraName, options, correctAnswer) {
  questionDiv.innerText = `${gotraName}?`;
  optionsDiv.innerHTML = "";
  questionDiv.style.fontSize = "2rem";
  questionDiv.style.textAlign = "center";

  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "px-4 py-3 bg-black hover:bg-black-light border-b border-gold rounded-lg text-white";
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option, btn, correctAnswer);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selectedOption, buttonElement, correctAnswer) {
  const audio = new Audio();

  Array.from(optionsDiv.children).forEach((btn) => {
    btn.classList.remove("correct", "incorrect");
  });

  if (selectedOption === correctAnswer) {
    score++;
    scoreDiv.innerText = `Correct! Score: ${score}`;
    buttonElement.classList.add("correct");
    audio.src = "assets/audio/correct.mp3";
  } else {
    scoreDiv.innerText = `Wrong! Score: ${score}`;
    buttonElement.classList.add("incorrect");
    audio.src = "assets/audio/incorrect.mp3";
  }

  audio.play();

  const historyItem = document.createElement("div");
  historyItem.className = "p-2 border-b border-gray-500 bg-gold-light";
  historyItem.innerHTML = `
    <div><strong>Q:</strong> Which caste belongs to Gotra "${currentQuestion.gotraName}"?</div>
    <div><strong>Correct:</strong> <span class="text-green-600">${correctAnswer}</span></div>
    ${selectedOption !== correctAnswer ? `<div><strong>Your Answer:</strong> <span class="text-red-600">${selectedOption}</span></div>` : ""}
  `;
  historyDiv.appendChild(historyItem);
  historyDiv.scrollTop = historyDiv.scrollHeight;

  if (askedQuestions.length < Object.keys(gotraData).length) {
    setTimeout(generateQuestion, 1000);
  } else {
    endGame();
  }
}

function resetGame() {
  score = 0;
  askedQuestions = [];
  historyDiv.innerHTML = "";
  scoreDiv.innerText = `Score: ${score}`;
  playAgainBtn.classList.add("hidden");
  generateQuestion();
}

function endGame() {
  questionDiv.innerText = "Game Over!";
  optionsDiv.innerHTML = "";
  playAgainBtn.classList.remove("hidden");
}

resetBtn.onclick = resetGame;
playAgainBtn.onclick = resetGame;

resetGame(); // Start the quiz

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

  // Shimmer effect for loading placeholder
  resultDiv.innerHTML = `
    <div class="shimmer-placeholder h-10 w-10 rounded-full inline-block mr-2"></div>
    <span class="text-gray-300">Checking ...</span>
  `;

  setTimeout(() => {
    resultDiv.innerHTML = ""; // Clear previous result

    if (!myGotra || !herGotra) {
      // Cast not found
      resultDiv.innerHTML = `
        <span class="flex items-center">
          <img 
            src="assets/icons/soul-emoji.svg" 
            class="h-10 w-10 inline-block mr-2" 
            onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
          />   
          <p>One or both casts not found in our records. Please try again.</p>
        </span>
      `;
      resultDiv.classList.add("text-gray-300");
      audio.src = "assets/audio/error.mp3";
    } else if (myGotra === herGotra) {
      // Same Gotra
      resultDiv.innerHTML = `
        <span class="flex items-center">
          <img 
            src="assets/icons/sad-emoji.svg" 
            class="h-10 w-10 inline-block mr-2" 
            onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
          />
          <p>${messages.UnfortunatelyText}</p>
        </span>
        <p style="color:gold">${myCast} -----> ${myGotra}</p>
        <p style="color:gold">${herCast} -----> ${herGotra}</p>
      `;
      resultDiv.classList.add("text-red-600");
      audio.src = "assets/audio/lost-sound.mp3";
    } else {
      // Compatible
      resultDiv.innerHTML = `
        <span class="flex items-center">
          <img 
            src="assets/icons/happy-emoji.svg" 
            class="h-10 w-10 inline-block mr-2" 
            onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
          />
          <p class="text-green-600">${messages.congratulationsText}</p>
        </span>
        <p style="color:gold">${myCast} -----> ${myGotra}</p>
        <p style="color:gold">${herCast} -----> ${herGotra}</p>
      `;
      resultDiv.classList.add("text-green-600");
      audio.src = "assets/audio/win-sound.mp3";
    }

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

const castInputFields = [
  { input: "my-cast", suggestionBox: "my-cast-suggestions" },
  { input: "her-cast", suggestionBox: "her-cast-suggestions" },
];
const gotraData = {
  Agasti: {
    gotraName: "अगस्ती",
    castes: ["Dhungel"],
  },
  Angira: {
    gotraName: "अंगिरा",
    castes: ["Joshi", "Sedai", "Saunak", "Shahi"],
  },
  Atri: {
    gotraName: "अत्रि",
    castes: [
      "Adhikari",
      "Arjel/Arjyal",
      "Bam (Raakse Thakuri)",
      "Bhatta (Pashupat)",
      "Chapagai",
      "Gotame",
      "Khatiwoda",
      "Mishra",
      "Ojha",
      "Wosti",
    ],
  },
  Aatreya: {
    gotraName: "आत्रेय",
    castes: [
      "Aryal",
      "Bhatta (Duwadi)",
      "Devkota",
      "Dawadi",
      "Dulal",
      "Kalikote (Khadka)",
      "Paudel",
      "Pokharel (Pani)",
      "Rosyara",
      "Sharma",
      "Sigdel",
      "Thapa (Bagale)",
    ],
  },
  Bharadwaaj: {
    gotraName: "भरद्वाज",
    castes: [
      "Adhikari",
      "Bhatta (Palyal)",
      "Chaulagai",
      "Devkota",
      "Jamarkattel",
      "Lohani",
      "Niraula",
      "Panthi",
      "Pandey (Kuleta)",
      "Panta",
      "Pokharel (Dudh)",
      "Rawat",
      "Shahi",
      "Siwakoti / Shiwakoti",
      "Subedi",
      "Thami (Adhikari)",
      "Thapaliya",
      "Upadhaya",
      "Wagle",
      "Bhandari (Niraula, Suntakhane)",
    ],
  },
  Dhananjaya: {
    gotraName: "धनञ्जय",
    castes: [
      "Basel/ Batsayal",
      "Basnet",
      "Bhusal",
      "Budhathoki (Khulal)",
      "Dhamala",
      "Gauripitri/ Gairipippli",
      "Guragai",
      "Humagai",
      "Karki (Khulal)",
      "Khadka (Khulal)",
      "Kukurkote",
      "Kunwar",
      "Pangeni",
      "Rijal",
      "Thapa",
      "Bhandari (Bhusal)",
    ],
  },
  Garg: {
    gotraName: "गर्ग",
    castes: [
      "Bastola",
      "Bhatta (Lamichhane)",
      "Bhetuwal",
      "Bhurtel",
      "Chudal",
      "Gajurel",
      "Khetan",
      "Thapa (Lamichhane)",
      "Rokaha",
      "Rishal",
      "Shah (Kaskeli Khand)",
    ],
  },
  Gautam: {
    gotraName: "गौतम",
    castes: [
      "Chanda",
      "Bam (Thakuri)",
      "Dangal",
      "Mahat",
      "Pandey (Paleu)",
      "Tripathi",
      "Tiwari",
    ],
  },
  GhritaKaushik: {
    gotraName: "घृत कौशिक",
    castes: ["Baral", "Karki (Sutar)", "Khanal", "Nepal", "Pandit"],
  },
  Kapil: {
    gotraName: "कपिल",
    castes: ["Khati", "Daani", "Bohora"],
  },
  Kashyap: {
    gotraName: "कश्यप",
    castes: [
      "Adhikari (Bhadare, Khilchine and Kaubali)",
      "Badaal",
      "Bhatta (Kalauni, Mushyal)",
      "Bogati",
      "Budhathoki (Sodari)",
      "Darji",
      "Gadtaula",
      "Gartaula",
      "Ghimire",
      "Hada",
      "Kathayat",
      "Kumal",
      "Kumbhairana",
      "Pade",
      "Pandey (Badkhora, Badaal, Bhumihar, Simaaldiya)",
      "Rayamajhi",
      "Shah (Thakuri)",
      "Sahi",
      "Thapa (Godar)",
      "Tiwari",
    ],
  },
  Kaudinya: {
    gotraName: "कौण्डिन्य",
    castes: [
      "Achraya",
      "Baskota",
      "Bhandari (Kaala)",
      "Gaagle",
      "Joshi",
      "Khadka",
      "Kharel",
      "Marashini",
      "Neupane",
      "Pakurel",
      "Paneru",
      "Pathak",
      "Parajuli",
      "Sapkota",
      "Satyal",
      "Thapa (Bagale and Gamle)",
      "Trital",
    ],
  },
  Kausik: {
    gotraName: "कौशिक",
    castes: [
      "Bam (Chhatyal Thakuri)",
      "Baniya",
      "Bastakoti",
      "Bhandari (Aachhami)",
      "Bidari",
      "Dhital",
      "Dhungana",
      "Gaudel",
      "Khadka",
      "Khapatari",
      "Lamichhane",
      "Luitel",
      "Majhi",
      "Pathak",
      "Phuyal",
      "Pudasaini",
      "Raghubansi",
      "Regmi",
      "Rimal",
      "Sanjel",
      "Shahi (Sijapati)",
      "Tiwari",
      "Thami",
    ],
  },
  Mandabya: {
    gotraName: "माण्डव्य",
    castes: [
      "Bajagai",
      "Bajhai",
      "Gyawali",
      "Katuwal",
      "Maskey",
      "Panthi",
      "Bhandari (Bajgain)",
    ],
  },
  Maudagalya: {
    gotraName: "मौद्गल्य",
    castes: [
      "Belkadhi",
      "Karki (Mudula)",
      "Koirala",
      "Kuinkel",
      "Rume",
      "Simkhada",
      "Timsina/ Timilsina",
      "Upreti",
    ],
  },
  Parasar: {
    gotraName: "परासर",
    castes: [
      "Dhimal (khas)",
      "Karki (Lama)",
      "Kattel",
      "Marhattha",
    ],
  },
  Ravi: {
    gotraName: "रवि",
    castes: ["Shah (Kalyaal Thakuri)"],
  },
  Vashishta: {
    gotraName: "वशिष्ठ",
    castes: [
      "Bhandari (Thansinghe)",
      "Bhatta (Tapleli)",
      "Bhattarai",
      "Chalise",
      "Dawadi",
      "Gaire",
      "Kharel",
      "Mudabhari",
      "Pathak",
      "Raut",
      "Suyal (Garthi)",
      "Suyal (Thapa)",
    ],
  },
};



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

  // Add shimmer effect as a loading placeholder
  resultDiv.innerHTML = `
    <div class="shimmer-placeholder h-10 w-10 rounded-full inline-block mr-2"></div>
    <span class="text-gray-300">Checking compatibility...</span>
  `;

  setTimeout(() => {
    // Clear previous result
    resultDiv.innerHTML = "";

    if (!myGotra || !herGotra) {
      resultDiv.innerHTML = `
        <img 
          src="assets/icons/soul-emoji.svg" 
          class="h-10 w-10 inline-block mr-2" 
          onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
        />
        One or both casts not found in our records. Please try again.
      `;
      resultDiv.classList.add("text-gray-300");
    } else if (myGotra === herGotra) {
      resultDiv.innerHTML = `
        <img 
          src="assets/icons/sad-emoji.svg" 
          class="h-10 w-10 inline-block mr-2" 
          onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
        />
        Unfortunately, you both belong to the same Gotra (${myGotra}). Marriage is traditionally not recommended.
      `;
      resultDiv.classList.add("text-red-600");
    } else {
      resultDiv.innerHTML = `
        <img 
          src="assets/icons/happy-emoji.svg" 
          class="h-10 w-10 inline-block mr-2" 
          onload="this.parentElement.querySelector('.shimmer-placeholder')?.remove()" 
        />
        Congratulations! You both belong to different Gotras. You can marry!
      `;
      resultDiv.classList.add("text-green-600");
    }
  }, 500); // Simulate a delay of 0.5 second for loading
});
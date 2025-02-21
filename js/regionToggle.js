document.getElementById("region-toggle").addEventListener("click", function () {
    let flagIcon = document.getElementById("flag-icon");
    let languageText = document.getElementById("language-text");

    if (flagIcon.src.includes("flag-nepal.svg")) {
      flagIcon.src = "assets/icons/flag-india.svg"; 
      languageText.textContent = "भारत"; 
    } else {
      flagIcon.src = "assets/icons/flag-nepal.svg"; 
      languageText.textContent = "नेपाल"; 
    }

    // Here you can add logic to switch the Gotra mapping based on selection
  });
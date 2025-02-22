document.getElementById('region-toggle').addEventListener('change', function() {
  const languageText = document.getElementById('language-text');
  const flagNepal = document.getElementById('flag-nepal');
  const flagIndia = document.getElementById('flag-india');

  if (this.checked) {
    languageText.textContent = "भारत";
    flagNepal.classList.add('opacity-0');
    flagIndia.classList.remove('opacity-0');
  } else {
    languageText.textContent = "नेपाल";
    flagNepal.classList.remove('opacity-0');
    flagIndia.classList.add('opacity-0');
  }
});

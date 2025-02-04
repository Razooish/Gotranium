// Data for the cards
const cardsData = [
    {
      title: "What is Gotra?",
      description: "Gotra refers to a clan system that identifies families of common ancestry originating from ancient sages. It connects individuals to their spiritual lineage and acts as a guiding principle in Hindu culture.",
      details: "Gotra serves as a significant cultural and spiritual marker, connecting individuals to their ancestral lineage and reinforcing their identity in Hindu traditions."
    },
    {
      title: "Significance in Marriages",
      description: "Traditionally, marriage between individuals of the same Gotra is avoided to preserve genetic diversity and honor ancestral wisdom. This practice reinforces cultural harmony and family bonds.",
      details: "Avoiding marriage within the same Gotra is based on ancient wisdom to ensure healthy genetics and honor the lineage of great sages."
    },
    {
      title: "Origin of Gotras",
      description: "Gotras originated from the ancient sages or Rishis who were considered the spiritual ancestors of different clans. The tradition has been passed down through generations.",
      details: "The lineage of Gotras traces back to the Saptarishis, the seven great sages who laid the foundation for many ancient traditions and spiritual teachings."
    },
    {
      title: "Gotra in Modern Society",
      description: "While Gotras were primarily used in ancient times to preserve spiritual and familial lineage, their relevance continues in modern society for cultural and traditional purposes.",
      details: "Modern society respects Gotra traditions while adapting them to current cultural and social contexts, maintaining a balance between tradition and modernity."
    },
    {
      title: "Gotra and Genetics",
      description: "Avoiding marriage within the same Gotra is believed to reduce the likelihood of genetic disorders and strengthen genetic diversity among families.",
      details: "Scientific research has found that maintaining genetic diversity has numerous health benefits and reinforces the wisdom behind the Gotra system."
    },
    {
      title: "Gotra and Rituals",
      description: "Gotra plays an essential role in Hindu rituals, honoring ancestors and invoking blessings.",
      details: "Rituals like Upanayana and Shraddha emphasize ancestral connections, showing respect for family heritage and ensuring cultural continuity."
    },
    {
      title: "Gotra and Naming Conventions",
      description: "Names in Hindu culture often reflect Gotra, connecting individuals to their spiritual heritage.",
      details: "Naming practices honor sages and traditions, reflecting the lineage and spiritual legacy within the family."
    },
    {
      title: "Gotra in Modern Times",
      description: "Despite being ancient, Gotra remains relevant in modern society, influencing marriage and cultural practices.",
      details: "Today, Gotra symbolizes cultural heritage and is often incorporated into family traditions and social norms."
    },
    {
      title: "Gotra and Spiritual Practices",
      description: "Mentioning Gotra in prayers and rituals helps connect individuals to their ancestral lineage.",
      details: "This practice reinforces spiritual identity and acknowledges the contributions of ancestral sages in guiding family traditions."
    },
    {
      title: "Gotra and Community Unity",
      description: "Gotra fosters a sense of unity and shared values within families and communities, strengthening bonds.",
      details: "By sharing a common lineage, Gotra emphasizes collective identity and collaboration among families."
    }
  ];
  
  // Function to render cards
  function renderCards() {
    const container = document.getElementById("cards-container");
    
    // Clear existing content
    container.innerHTML = "";
  
    // Iterate over cardsData and create each card
    cardsData.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card", "bg-gray-200", "shadow-lg", "rounded-2xl", "p-6");
  
      // Card Title
      const titleElement = document.createElement("h3");
      titleElement.classList.add("text-2xl", "font-bold", "text-gray-800", "mb-4");
      titleElement.innerText = card.title;
  
      // Card Description
      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("text-gray-600");
      descriptionElement.innerText = card.description;
  
      // Read More Button
      const readMoreButton = document.createElement("button");
      readMoreButton.classList.add("read-more-btn", "mt-4", "px-6", "py-2", "bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white", "font-semibold", "rounded-full", "shadow-lg", "transform", "transition", "duration-300", "hover:shadow-xl", "focus:outline-none");
      readMoreButton.innerText = "Read More";
      
      // Card Details (Hidden by default)
      const cardDetails = document.createElement("div");
      cardDetails.classList.add("card-details", "hidden");
      const detailsElement = document.createElement("p");
      detailsElement.classList.add("text-gray-700", "mt-4");
      detailsElement.innerText = card.details;
      cardDetails.appendChild(detailsElement);
  
      // Add click event to toggle card details visibility
      readMoreButton.addEventListener("click", () => {
        cardDetails.classList.toggle("hidden");
      });
  
      // Append elements to the card
      cardElement.appendChild(titleElement);
      cardElement.appendChild(descriptionElement);
      cardElement.appendChild(readMoreButton);
      cardElement.appendChild(cardDetails);
  
      // Append the card to the container
      container.appendChild(cardElement);
    });
  }
  
  // Call renderCards function to generate the content
  renderCards();
  
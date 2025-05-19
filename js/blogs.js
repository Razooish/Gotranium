// Data for the cards
const cardsData = [
  {
    title: "What is Gotra?",
    description: "Gotra is like a family tree that connects people to their ancestors. It comes from ancient sages and helps in understanding family lineage.",
    details: "Gotra is a way to trace your ancestral roots. In Hindu culture, it is believed that each Gotra started from a great sage, who passed down his lineage through generations. Even today, Gotra is used to identify family heritage and is often mentioned during religious rituals, marriage discussions, and other important events. It reminds people of their family history and cultural identity."
  },
  {
    title: "Significance in Marriages",
    description: "Traditionally, people from the same Gotra don’t marry each other to avoid genetic issues and to respect ancient traditions.",
    details: "In Hindu culture, marrying within the same Gotra is usually avoided because it is believed that people of the same Gotra are like siblings. This practice helps maintain genetic diversity and prevents hereditary diseases. It is also a way of following the wisdom of ancient sages, who encouraged marriages outside one’s Gotra to build stronger and more connected families."
  },
  {
    title: "Origin of Gotras",
    description: "Gotras started with ancient sages (Rishis) who passed down their family lineage, creating different clans.",
    details: "Gotras are said to originate from the Saptarishis, the seven great sages in Hindu mythology. These sages had many disciples and followers who carried forward their teachings and traditions. Over time, their names were used to identify different family lineages, which became the Gotra system we know today. This system has been followed for thousands of years and is still respected in many Hindu traditions."
  },
  {
    title: "Gotra in Modern Society",
    description: "Even today, Gotra is important in family traditions, marriage, and religious rituals, though its role has evolved.",
    details: "While Gotra was once strictly followed for marriage and rituals, today, its importance varies depending on the family and region. Some people still follow traditional rules, while others take a more flexible approach. In modern society, Gotra is often used in ceremonies like weddings and religious functions to honor ancestors and maintain cultural identity."
  },
  {
    title: "Gotra and Genetics",
    description: "Marrying outside one’s Gotra is believed to help prevent genetic disorders and improve family health.",
    details: "Science supports the idea that genetic diversity leads to healthier offspring. When people from different Gotras marry, the chances of inherited diseases decrease. This is one of the reasons why ancient traditions discouraged same-Gotra marriages. Though people may not fully understand the science behind it, this tradition unknowingly promotes healthier genetics and stronger future generations."
  },
  {
    title: "Gotra and Rituals",
    description: "Gotra plays a major role in Hindu rituals, where it is often mentioned during prayers and ceremonies.",
    details: "Many Hindu rituals, such as Upanayana (sacred thread ceremony) and Shraddha (ancestor worship), require individuals to mention their Gotra. This practice is a way of remembering and honoring one’s ancestors, ensuring that their blessings continue to guide future generations. It also helps maintain a deep connection between people and their spiritual roots."
  },
  {
    title: "Gotra and Naming Conventions",
    description: "In Hindu culture, names often include references to Gotra, symbolizing family heritage.",
    details: "Many Hindu families use Gotra names when naming their children, as a way to keep ancestral traditions alive. For example, some people add their Gotra as a middle or last name. This practice helps in identifying a person’s lineage and reminds them of their spiritual and cultural heritage."
  },
  {
    title: "Gotra in Modern Times",
    description: "Even though times have changed, Gotra still plays a role in cultural and family traditions.",
    details: "In today’s world, many people no longer strictly follow Gotra rules, but it remains an important part of Hindu identity. Some use it only for religious ceremonies, while others still follow traditional practices in marriage and family decisions. Whether strictly followed or not, Gotra continues to be a symbol of cultural and ancestral heritage."
  },
  {
    title: "Gotra and Spiritual Practices",
    description: "Mentioning Gotra during prayers is a way of connecting with ancestors and seeking their blessings.",
    details: "In Hinduism, prayers and rituals often involve reciting one’s Gotra. This practice is believed to strengthen spiritual connections and honor the wisdom of ancient sages. By acknowledging their Gotra, people feel a sense of belonging and responsibility to uphold their family’s values and traditions."
  },
  {
    title: "Gotra and Community Unity",
    description: "Gotra helps create a sense of unity among families and communities, strengthening cultural bonds.",
    details: "Since Gotra represents ancestral lineage, it brings people together who share a common history. It fosters a sense of belonging within communities, helping people connect with their extended family and maintain strong social ties. By preserving Gotra traditions, many Hindu communities maintain a shared identity and cultural harmony."
  }
];
let currentIndex = 0;

function renderSingleCard(index) {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // Clear previous

  const card = cardsData[index];

  const cardElement = document.createElement("div");
  cardElement.classList.add(
    "bg-black",
    "text-white",
    "shadow-lg",
    "rounded-2xl",
    "p-6",
    "max-w-2xl",
    "w-full"
  );

  const title = document.createElement("h3");
  title.classList.add("text-2xl", "font-bold", "text-gray-200", "mb-4");
  title.textContent = card.title;

  const description = document.createElement("p");
  description.classList.add("text-gray-300", "mb-3");
  description.textContent = card.description;

  const details = document.createElement("p");
  details.classList.add("text-gray-400");
  details.textContent = card.details;

  cardElement.appendChild(title);
  cardElement.appendChild(description);
  cardElement.appendChild(details);

  container.appendChild(cardElement);
  updateNavButtons();
}

function updateNavButtons() {
  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("next-btn").disabled = currentIndex === cardsData.length - 1;

  document.getElementById("prev-btn").classList.toggle("opacity-50", currentIndex === 0);
  document.getElementById("next-btn").classList.toggle("opacity-50", currentIndex === cardsData.length - 1);
}

function setupNavigation() {
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderSingleCard(currentIndex);
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < cardsData.length - 1) {
      currentIndex++;
      renderSingleCard(currentIndex);
    }
  });
}

// Initial setup
renderSingleCard(currentIndex);
setupNavigation();

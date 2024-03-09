my-javascript-project/
|-- index.html
|-- styles/
|   |-- main.css
|-- scripts/
|   |-- main.js
|-- assets/
    |-- images/
    |-- other_assets/

    <!-- HTML structure for the memory card game -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/main.css" />
    <title>Memory Card Game</title>
  </head>
  <body>
    <div class="game-container" id="game-container">
      <!-- Memory cards will be dynamically generated here -->
    </div>
    <script src="scripts/main.js"></script>
  </body>
</html>
/* CSS styling for the memory card game */
/* Add your own styles for the game cards and container */
.game-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
// JavaScript logic for the memory card game
document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
  const cardSymbols = ["🌟", "🎉", "🌈", "🚀", "🎨", "🍕", "🎸", "📚"];
  const allCards = [...cardSymbols, ...cardSymbols]; // Duplicate to create pairs
  const shuffledCards = shuffle(allCards);
  const gameContainer = document.getElementById("game-container");
  let flippedCards = [];
  let moves = 0;

  // Create and display cards on the game board
  shuffledCards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;
    card.innerHTML = '<div class="card-inner"></div>';
    card.addEventListener("click", flipCard);
    gameContainer.appendChild(card);
  });

  // Function to shuffle the cards
  function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  // Function to handle card flipping
  function flipCard(event) {
    const selectedCard = event.currentTarget;
    selectedCard.classList.add("flipped");
    flippedCards.push(selectedCard);

    if (flippedCards.length === 2) {
      // Two cards flipped, check for a match
      setTimeout(checkMatch, 800);
      moves++;
      // Update the UI with the number of moves
      // (You can create a UI element for displaying moves)
    }
  }

  // Function to check if the flipped cards match
  function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.textContent;
    const symbol2 = card2.textContent;

    if (symbol1 === symbol2) {
      // Matching pair, keep cards flipped
      card1.removeEventListener("click", flipCard);
      card2.removeEventListener("click", flipCard);
    } else {
      // Not a match, flip cards back
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }

    flippedCards = []; // Reset flipped cards

    // Check if all pairs are matched
    if (document.querySelectorAll(".flipped").length === shuffledCards.length) {
      // Game completed
      alert(Congratulations! You completed the game in ${moves} moves.);
    }
  }
}

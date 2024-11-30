const gameBoard = document.getElementById("gameBoard");
const restartGame = document.getElementById("restartGame");

// Card data
const cardImages = [
  "apple.jpg",
  "banana.jpg",
  "brinjal.jpg",
  "carrot.jpg",
  "guava.jpg",
  "orange.jpg",
  "tomato.jpg",
  "grapes.jpg",
];

// Duplicate and shuffle cards
let cards = [...cardImages, ...cardImages];
cards = cards.sort(() => 0.5 - Math.random());

let flippedCards = [];
let matchedCards = 0;

// Create game board
function createBoard() {
  gameBoard.innerHTML = "";
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.card = card;
    cardElement.innerHTML = `<img src="${card}" alt="Card">`;
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

// Flip card
function flipCard() {
  if (flippedCards.length === 2) return;

  this.classList.add("flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

// Check for match
function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.card === card2.dataset.card) {
    matchedCards += 2;
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }
  flippedCards = [];

  if (matchedCards === cards.length) {
    setTimeout(() => alert("You matched all the cards!"), 500);
  }
}

// Restart game
restartGame.addEventListener("click", () => {
  matchedCards = 0;
  flippedCards = [];
  cards = cards.sort(() => 0.5 - Math.random());
  createBoard();
});

// Initialize the board
createBoard();

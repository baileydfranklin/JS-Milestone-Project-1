const DECK_URL =
  "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

const shuffleButton = document.querySelector("#shuffleButton")
const dealButton = document.querySelector("#dealButton");
const player1 = document.querySelector("#player-1-conainer");

/////     SHUFFLE DECK     /////
shuffleButton.addEventListener("click", async () => {
  const deck = await shuffled();
  const deckData = await deck.json();
  const { deck_id } = deckData;
/////     SHUFFLE DECK     /////

/////     DRAW CARDS     /////
dealButton.addEventListener("click", async () => {

  const card = await drawACard(deck_id, 2);
  const cardData = await card.json();
  const { cards } = cardData;
  const card1 = cards[0];
/////     DRAW CARDS     /////

/////     DISPLAY CARDS     /////
  const img = document.createElement("img");
  img.setAttribute("src", card1.images.svg);
  console.log({ img, card1 });
  player1.append(img);
  console.log({ cardData });
/////     DISPLAY CARDS     /////
})
})

async function shuffled() {
  const deck = await fetch(DECK_URL);
  return deck;
}

async function drawACard(deckId, number) {

  const CARD_URL = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${number}`;
  const card = await fetch(CARD_URL);
  return card;
}
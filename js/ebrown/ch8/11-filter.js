// filter , as the name implies, is designed to remove unwanted things from an array.
//Like map , it returns a new array with elements removed.

// create a deck of playing cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
for(let value=1; value<=13; value++)
cards.push({ suit, value });
// get all cards with value 2:
cards.filter(c => c.value === 2);

// get all diamonds:
cards.filter(c => c.suit === 'D'); // length: 13
// get all face cards
cards.filter(c => c.value > 10); // length: 12
// get all face cards that are hearts
cards.filter(c => c.value > 10 && c.suit === 'H'); // length: 3
// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).
const cardRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"]

function createCardDeck(numbOfDecks) {
    let cardsDeck =[];
    cardSuits.forEach(element => {
        cardRanks.forEach(item => {
            cardsDeck.push(`${item} of ${element}`);
        })
    });
    if (numbOfDecks == 2) {
        cardsDeck = cardsDeck.concat(cardsDeck);
    }
    return cardsDeck;
}

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.

function validateNumbers(number, name, numberOfDecks = 1) {
    if (isNaN(number) || number <= 0 || Math.sign(number) == -1) {
        throw Error (`Number must be a positive integer`);
    }            
    if ( numberOfDecks > 2 || numberOfDecks < 1) {
        throw new Error (`NumDecks must be 1 or 2`);
    }
    if (name == "cardsPerPlayer" && number > (52 * numberOfDecks)) {
    throw new Error("The requested number of cards exceed the deck size");
    }
}

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

function shuffleTheCards(cardsArray) { // Using Fisher-Yates sorting algorithm, O(1) time and space compexity 
    for (let i = cardsArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]; 
    } 
    return cardsArray; 
    
}

// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.
function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

    validateNumbers(numPlayers, "numPlayers");
    validateNumbers(cardsPerPlayer, "cardsPerPlayer");
    validateNumbers(numDecks, "numDecks", numDecks);

    let cardsDeck = createCardDeck(numDecks);
    cardsDeck = shuffleTheCards(cardsDeck);

// TODO: Deal cards to the specified number of players.
    let allDealtcards = [];
    let i = 0;
    const totalCardsRequired = numPlayers * cardsPerPlayer
    if(cardsDeck.length < totalCardsRequired) {
        throw Error ("Not enough cards")
    }
    for (let player = 0; player < numPlayers; player++){
        let dealtCardsPerPlayer = [];

        for (let card = 0; card < cardsPerPlayer; card++) {
            dealtCardsPerPlayer.push(cardsDeck[i]);
            i++;
        }

        allDealtcards.push(dealtCardsPerPlayer);
    }
    return allDealtcards;

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.

}

console.log(shuffleAndDeal(5, 2, 2))


export default shuffleAndDeal;


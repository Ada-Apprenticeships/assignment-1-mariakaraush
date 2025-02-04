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


function shuffleTheCards(cardsArray) { // Using Fisher-Yates sorting algorithm, O(n) time and space complexity, for sort().Math.Random() time complexity O(n log n)
    for (let i = cardsArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]; 
    } 
    return cardsArray; 
}

function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {

    validateNumbers(numPlayers, "numPlayers");
    validateNumbers(cardsPerPlayer, "cardsPerPlayer");
    validateNumbers(numDecks, "numDecks", numDecks);

    let cardsDeck = createCardDeck(numDecks);
    cardsDeck = shuffleTheCards(cardsDeck);

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
}

console.log(shuffleAndDeal(5, 2, 2))


export default shuffleAndDeal;


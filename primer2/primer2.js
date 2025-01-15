
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.
function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {



    // TODO: Create a standard 52-card deck (or 104 if numDecks is 2).
    const cardRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"]

    function createCardDeck(numbOfDecks) {
        let cardsDeck =[];
        cardSuits.forEach(element => {
            cardRanks.forEach(item => {
                cardsDeck.push(`${item} of ${element}`)
            })
        });
        if (numbOfDecks == 2) {
            cardsDeck = cardsDeck.concat(cardsDeck)
        }
        return cardsDeck;
    }
    console.log(createCardDeck(2).length)

    let cardsDeck = createCardDeck(numDecks);

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.
    if (Math.sign(numPlayers) == -1 || Math.sign(cardsPerPlayer) == -1 || numDecks > 2) {
        // return shuffleAndDeal();
        console.log("wrongs number")
    }
    if (cardsPerPlayer > 52 * numDecks) {
        throw Error("The requested number of cards exceed the deck size")
    }

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

    function shuffleTheCards(cardsArray) { // Using Fisher-Yates sorting algorithm 
        for (let i = cardsArray.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]; 
        } 
        return cardsArray; 
        
}

    // console.log(shuffleTheCards(cardsDeck))

    cardsDeck = shuffleTheCards(cardsDeck)

// TODO: Deal cards to the specified number of players.
    function dealingCards(numPlayers, cardsPerPlayer, cardsArray) {
        let allDealtcards = [];
        let i = 0;
        const totalCardsRequired = numPlayers * cardsPerPlayer
        if(cardsArray.length < totalCardsRequired) {
            throw Error ("Not enough cards")
        }
        for (let player = 0; player < numPlayers; player++){
            let deltCardsPerPlayer = [];

            for (let card = 0; card < cardsPerPlayer; card++) {
                deltCardsPerPlayer.push(cardsArray[i])
                i++
            }

            allDealtcards.push(deltCardsPerPlayer)
        }
        return allDealtcards

    }
    console.log(dealingCards(3,3, cardsDeck))
    let dealtCards = dealingCards(numPlayers, cardsPerPlayer, cardsDeck)

// TODO: Return the hands dealt as an array of arrays.
    return dealtCards
// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.

}

shuffleAndDeal(3, 5, 2)
export default shuffleAndDeal;


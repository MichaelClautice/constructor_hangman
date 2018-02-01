// a random word is selected and exported
// here is an array of random words for the hangman game
var wordsArray = ['lizard', 'biscuit', 'radio', 'airplane', 'table', 'bike'];
// select a random word from that array & assign it to a var called randomWord
var randomWord = Math.floor(Math.random() * wordsArray.length);
// use the exports keyword to make the randomWord available outside this file
exports.randomWord = randomWord;
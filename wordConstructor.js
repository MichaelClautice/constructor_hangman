// require() is used to access the external letter constructor & assign it as a value to the var letterConstruct √
// ---
// ??? is this right?
// answer here:___________
var letterConstructor = require('./letterConstructor');
// ---
// •••••••••HERE IS THE WORD CONSTRUCTOR••••••••••• √
// ---
// it will check the user's letter guesses against the letters in the random word from the wordsArray array in the file called randomWordArray.js √
// ---
// this word constructor can create an instantiation of a word made up from the game-player's sngl-letter-guesses √
// ---
// ??? what should wordConstructor's parameter be?
// ??? won't it be using an instantiation of letter constructor?
// answer here:___________
function wordConstructor(word) {
// ---
// ??? the word property will hold the value of what? - an instantiation of wordConstructor()? √
// answer here:___________
    this.word = word;
// ---
// empty array which will hold the game-player's guessed letters from letterConstructor √
    this.lettersArray = [];
// ---
// guessesMadeString is an empty string (for now) and will hold the user's guessed letters
    this.guessesMadeString = '';
// ---
// ---
// ---
// ---
// SUMMARY OF SECTION 01/04:
// ---
// iterate thru wordValue & push those letters into lettersArray
// ---
// •••••••••••••••••••START SECTION 01/04
// ---
// iterate thru 'word' & push ea instantiated letter into lettersArray
// ---
    for(var i = 0; i < this.word.length; i++) {
// ---
// next line shows where we take the value of an instantiation from 'letterConstructor' annnnd...
// push it into the letters array
// ---
// next line - REMEMBER! in this line, think from the inside to the outside!
// ---
// 1 - we take an individual array item from wordValue[i]
// 2 - use that as an arg for letterConstructor()
// 3 - keyword "new" tells JS that we want to create an instantiation from the letterConstructor
// 4 - JS's push() function will "push" that instantiation into lettersArray[]
        this.lettersArray.push(new letterConstructor(this.word[i]));
    }
};
// ••••••••••••••••••• END SECTION 01/04
// ---
// ---
// ---
// ---
// instead of binding a method called isCompleteMethod inside the constructor we use the keyword prototype to define it outside the constructor
// ---
// ---
// ---
// ---
// ••••••••••••••••••• START SECTION 02/04

// ITERATE THRU lettersArray ONE LETTER AT A TIME AND...••••••••••••
// if any of those array items are NOT keyboard values...
// the boolean value of showLetter will be false
// ---
// isCompleteMethod is assigned a value of an anonymous function
// ---
// •••••••••HERE IS THE isCompleteMethod PROTOTYPE METHOD•••••••••••
wordConstructor.prototype.isCompleteMethod = function(){
// this function will iterate thru the lettersArray
    for(var i = 0; i < this.lettersArray.length; i++){
// if any of the array items are NOT keyboard values...
// the boolean value of showLetter will be false
        if(!this.lettersArray[i].showLetter) return false;
    }
// otherwise the boolean value of show will be true
// apparently 'showLetter' will be used elsewhere, right?????<<<<<<
    return true;
}
// ••••••••••••••••••• END SECTION 02/04
// ---
// ---
// ---
// ---
// ••••••••••••••••••• START SECTION 03/04
// ---
// •••••••••HERE IS THE findLetterMethod PROTOTYPE METHOD•••••••••••
// ---
// takes 'letterConstruct' as an arg from letterConstructor.js
wordConstructor.prototype.findLetterMethod = function(letterConstruct){
// converts it to lower case if needed & assigns it to a var
    var lowerLetter = letterConstruct.toLowerCase();
// if lowerLetter is already in guessesMadeString...
// indexOf() will search thru the guessesMadeString for the first occurance of lowerLetter
// if it DOES exist...
    if (this.guessesMadeString.indexOf(lowerLetter) !== -1) {
// tell the user: Duplicate letter - please try again.
        return console.log('\nDuplicate letter - please try again.');
    }
// the guessed letter will be assigned as a value one by one into guessesMadeString as a way to record the guess
    this.guessesMadeString += lowerLetter;
// now we iterate thru the letters array
// REMEMBER! - i stands for iterator, not item!
    for(var i=0; i<this.lettersArray.length; i++){
// if the lower case value of an item in the lettersArray array is equal to lowerLetter...
        if(this.lettersArray[i].value.toLowerCase() === lowerLetter){
// than the boolean value of show is assigned true
        this.lettersArray[i].showLetter = true;
        }
    }
};
// ••••••••••••••••••• END SECTION 03/04
// ---
// ---
// ---
// ---
// ••••••••••••••••••• START SECTION 04/04
// ---
// •••••••••HERE IS THE toStringMethod PROTOTYPE METHOD•••••••••••
wordConstructor.prototype.toStringMethod = function(){
// output is an empty string (for now)
  var output = '';
// loop-iterate thru lettersArray &
  for(var i=0; i<this.lettersArray.length; i++){
// saveLetterMethod() is defined in an external js file
    output += this.lettersArray[i].saveLetterMethod();
  }
  return output;
// ---
// ••••••••••••••••••• END SECTION 04/04
// ---
// ---
// ---
// ---
// exports is used to make this constructor instantiation available in other js files
// ??? is this right?
// answer here:___________
exports.wordConstruct = wordConstructor;
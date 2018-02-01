// the require method is used to get access to the external letter constructor & assign it as a value to the variable letterConstruct

var letterConstruct = require('./letterConstructor');

// •••••••••HERE IS THE WORD CONSTRUCTOR•••••••••••

// it will check the user's letter guesses against the letters in the random word from the wordsArray array in the file called randomWordArray.js

// this word constructor will create an instantiation called word

function wordConstructor(value) {
// the value property will hold the value (of what? - the instantiation of this word constructor?)
    this.value = value;
// an array to hold letters
    this.lettersArray = [];
// guessesMadeString is an empty string (for now)
// guessesMadeString will hold the user's guessed letters
    this.guessesMadeString = '';
// iterate thru 'value' & push ea letter into lettersArray
    for(var i = 0; i < this.value.length; i++) {
// this line shows where we take the value of the instantiation 'letterConstruct' from the letterConstructor.js file annnnd...
// push it into the letters array
        this.lettersArray.push(new letterConstruct.letterConstructor(this.value[i]));
    }
};

// instead of binding a method called isCompleteMethod inside the constructor we use the keyword prototype to define it outside the constructor

// isCompleteMethod is assigned a value of an anonymous function

// •••••••••HERE IS THE isCompleteMethod PROTOTYPE METHOD•••••••••••
wordConstructor.prototype.isCompleteMethod = function(){
// this function will iterate thru the lettersArray
    for(var i = 0; i < this.lettersArray.length; i++){
// if any of the array items are NOT keyboard values...
// the boolean value of show will be false
        if(!this.lettersArray[i].show) return false;
    }
// otherwise the boolean value of show will be true
// apparently 'show' will be used elsewhere, right?????<<<<<<
    return true;
}

// •••••••••HERE IS THE findLetterMethod PROTOTYPE METHOD•••••••••••

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
        this.lettersArray[i].show = true;
        }
    }
};

// •••••••••HERE IS THE toStringMethod PROTOTYPE METHOD•••••••••••
wordConstructor.prototype.toStringMethod = function(){
// output is an empty string (for now)
  var output = '';
// loop-iterate thru lettersArray &
  for(var i=0; i<this.lettersArray.length; i++){
// hey - printLetterMethod() is defined in an external js file - is this okay?
    output += this.lettersArray[i].printLetterMethod();
  }
  return output;
}

// exports is used to make this constructor instantiation available in other js files

exports.wordConstruct = wordConstructor;
// the require method is used to access the inquirer pkg
// the inquirer pkg is needed to prompt the user for input AND do what w/ the user's input?
// treat it like an argV?
// ---
// REQUIRE HERE:
// ---
var inquirer = require('inquirer');
// ---
// the require method is used to get access to the external letter constructor & assign it as a value to the variable letterConstruct
// ---
// REQUIRE HERE:
// ---
var letterConsrtruct = require('./letterConstructor');
// ---
// the require method is used to get access to the external word constructor & assign it as a value to the variable wordConstructor
// ---
// REQUIRE HERE:
// ---
var wordConstructor = require('./wordConstructor');
// ---
// the require method is used to get access to the external randomWordArray.js & assign it to randomWord
// ---
// REQUIRE HERE:
// ---
var randomWord = require('./randomWordArray');
// ---
// this var is empty for now
// ---
var letterGuessed;
// ---
// an instantiation from wordConstructor will be assigned as a value to the var myWord
// ---
var myWord = new wordConstructor(randomWordArray.randomWord);
// ---
// the game player has 2 chances only
// ---
var maxGuesses = 2;
// ---
// this is where the game starts
// ---
function takeAGuess(){
// ---
// prompt game-player to enter a letter
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Hello, game-player! Please enter a letter:',
// here is a validate property
// it's value is a function that will take a string, and...
        validate: function(string){
// if the length of the str is NOT equal to 1
            if (string.length !=== 1) return false;
                var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
                return regEx.test(string);
                }
// Game control
        }]).then(function(letterInput){
                var letter = letterInput.letter;
                myWord.findLetter(letter);
// Check
                    if(myWord.isCompleteMethod()){
                    console.log('Yes! It was ' + myWord.toStringMethod() + '!');
// Winner
                    return;
                    }
                    console.log('-------------------\n');
// ---
//If we are here the game did not end. Next guess.
// ---
                console.log('\nYou have ' + (maxGuesses - myWord.guessesMadeString.length) + ' guesses left.')
                console.log('');
                takeAGuess(); //Recursive call
                }
  );

    if (myWord.guessesMadeString.length >= maxGuesses){
        console.log('Sorry, game over. You have used up your 2 chances.');

        // inquirer.prompt([
        //  {
        //      name: 'play',
        //      message: 'Do you want to play again?',
        //      type: 'list',
        //      choices: ['yes', 'no']
        //  }
        // ]).then(function(play){
        //  if(play.choices === 'yes') {
        //      return takeAGuess();
        //  }
        //  return;
        // });

        return;
    }
// end of the takeAGuess function
}

// this is where the takeAGuess function is called
takeAGuess();

exports.letter;
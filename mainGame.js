
// the require method is used to access the inquirer pkg
// the inquirer pkg is needed to prompt the user for input AND do what w/ the user's input?
// treat it like an argV?
var inquirer = require('inquirer');

// the require method is used to get access to the external letter constructor & assign it as a value to the variable letterConstruct
var letterConsrtruct = require('./letterConstructor');

// the require method is used to get access to the external word constructor & assign it as a value to the variable wordConstructor
var wordConstructor = require('./wordConstructor');


// the require method is used to get access to the external randomWordArray.js & assign it to randomWord
var randomWord = require('./randomWordArray');

// this var is empty for now
var letterGuessed;

// an instantiation from wordConstructor will be assigned as a value to the var myWord
var myWord = new wordConstructor(randomWordArray.randomWord);

// the game player has 2 chances only
var maxGuesses = 2;

// this is where the game starts
function takeAGuess(){
// toString() will convert a number to a str if needed, right?
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses){
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

    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Hello! - Please enter a letter:',
        validate: function(str){
//          if (str.length != 1) return false;
            var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
            return regEx.test(str);
                }
        }]).then(function(letterInput){ //Game control
                var letter = letterInput.letter;
                myWord.findLetter(letter); //Check
                    if(myWord.isCompleteMethodMethod()){
                    console.log('Yes! It was ' + myWord.toStringMethod() + '!');
                    return; //Winner
                    }
                // console.log('-------------------\n'); //If we are here the game did not end. Next guess.
                console.log('\nYou have ' + (maxGuesses - myWord.guessesMadeString.length) + ' guesses left.')
                console.log('');
                takeAGuess(); //Recursive call
                }
  );
}

// this is where the takeAGuess function is called
takeAGuess();

exports.letter;
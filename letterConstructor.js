// welcome to the letterConstructor.js file - home of the letter constructor

// this constructor will display a letter as an underscore ' _ ' or as a valid keyboard value

// its param 'value' is the value of whatever keyboard-key was pressed

// the npm inquirer pkg takes the place of js's keystroke event handlers

// in mainGame.js the inquirer pkg will prompt the game-player to enter a letter & somehow saves that input for use in this here letter constructor

// •••••••••HERE IS THE LETTER CONSTRUCTOR•••••••••••
function letterConstructor(value) {
// keyboard value will be assigned to a var property called value
    this.value = value;
// the show property is assigned the boolean value of false
// the show property is used by printLetterMethod()
    this.show = false;
// if keyboard value is blank...
// (what is considered blank? - a non-valid key? - what is non-valid?)
// then the boolean show value is changed to true
    if (this.value === '')
        this.show = true;
}
// instead of binding a method called printInfoMethod to the 'this' keyword inside the constructor we use the keyword prototype to define it outside the constructor

// it's better outside the constructor beeeecause, uh...
// something to do w/ any method attached via 'this' will get re-declared for every new instance created, which could affect memory usage of the app negatively if we wish to create so many instances.

// printInfo will display either the keyboard value or an underscore in the Cmnd Line

// •••••••••HERE IS THE printLetterMethod PROTOTYPE METHOD•••••••••••
letterConstructor.prototype.printLetterMethod = function() {
// if show is false...
    if (this.show) {
// rtrn the value of whatever keyboard-key was pressed
        return this.value;
    }
// otherwise, if show is true, rtrn an underscore
    return ' _ ';
}
// exports is a module property
// exports is used to make this constructor available in other js files

module.exports.letterConstructor = letterConstructor;


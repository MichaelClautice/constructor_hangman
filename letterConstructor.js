// WELCOME! to the letterConstructor.js file - home of the letter constructor √
// ---
// letterConstructor() will take the game-player's sngle-letter-input and... √
// ---
// & be able to create an instantiation of that sngle-letter-input as an underscore ' _ ' or as a keyboard value √
// ---
// its param 'keyBoardValue' is the value of whatever key was pressed √
// ---
// the npm inquirer pkg prompts the game-player to enter a single letter & will save the value of that letter √
// ---
// (code for that prompt is in mainGame.js) √
// ---
// the npm inquirer pkg takes the place of js's keystroke event handlers - this is a "node ting", right? √
// ---
// REMEMBER!:
// A Node.js pkg incs files needed for a module √
// Modules are JS libraries that inc functions to inc in an app √
// ---
// •••••••••HERE IS THE LETTER CONSTRUCTOR•••••••••••
// ---
function letterConstructor(keyBoardValue) {
// ---
// keyBoardValue will be assigned to a var called keyBoardValue √
// ---
    this.keyBoardValue = keyBoardValue;
// ---
// the showLetter property is assigned the boolean value of false √
// the showLetter property will be used by saveLetterMethod() √
// (saveLetterMethod saves letter as a value or an underscore)
// ---
    this.showLetter = false;
// ---
// if keyBoardValue is blank... √
// ??? (what is considered blank? - a non-valid key? - what IS non-valid?) √
// answer here: not in randm word
// then the boolean showLetter value is changed to true
// ---
    if (this.keyBoardValue === '') {
        this.showLetter = true;
    }
}
// ---
// ---
// ---
// ---
// instead of binding a method called saveLetterMethod to the 'this' keyword inside the constructor we use the keyword 'prototype' to define it outside the constructor √
// ---
// it's better outside the constructor beeeecause, uh... √
// something to do w/ any method attached via 'this' will get re-declared for every new instance created, which could affect memory usage of the app negatively if we wish to create so many instances. √
// ---
// ---
// ---
// ---
// saveLetterMethod will display either the keyboard value or an underscore in the Cmnd Line √
// ---
// •••••••••HERE IS THE saveLetterMethod PROTOTYPE METHOD•••••••••••
// ---
letterConstructor.prototype.saveLetterMethod = function() {
// if game-player enters a valid letter - showLetter is false... √
    if (this.showLetter) {
// ---
// ??? rtrn (save?) the value of whatever keyboard-key was entered √
// answer here:___________yes
        return this.keyBoardValue;
    }
// ---
// otherwise, if showLetter is true, rtrn an underscore √
    return ' _ ';
}
// ---
// ??? exports is a package-property of module √
// answer here:___________
// ---
// exports is used to make this constructor available in other js files √
// ---
// ---
// ---
// ---
// ??? what am I making "exportable"?
// ??? letterConstructor? or "letterConstruct" - instantiation of letterConstructor?
// answer here:___________
module.exports.letterConstructor = letterConstructor;
// module.exports = letterConstructor;
// use es6 class


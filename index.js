const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");

// if (javaScript = annoying) {
//     computer.throw(outWindow)
// };

// reverse the commenting here later 
//   ( lines 7 off & 8 on )
let hiddenWord = "hangman";
// let hiddenWord = wordBank.randomElement();

let playerGuesses = 6;
let alreadyguessed = [];
let goodLetter = [];
let badLetter = [];
// let guesses = [];


// playHangman();

// function playHangman() {


// body parts
let top = "_______";
let rope = "|     |";
let pole = "|"; // 5
let platform = "_________";
let head = "     o";
let body = "     |";
let leftArm = "    /|\\";
let rightArm = "    /|";
let leg1 = "    / \\";
let leg2 = "    /";

// if (javaScript = annoying) {
//     computer.throw(outWindow)
// };

// function playHangman() {


let userName = readlineSync.question('\nHello. What is your name? ');


// function playHangman() {
//     while (playerGuesses > 0) {
//     }
// }

// function playHangman() {

// let userName = readlineSync.question('\nHello. What is your name? ');
console.log('   Greetings ' + userName + '!');

console.log("\nSo, " + userName + ", would you like to play a game?");

console.log(top);
console.log(rope);
console.log(pole);
console.log(pole);
console.log(pole);
console.log(pole);
console.log(platform);


if (readlineSync.keyInYNStrict("\n   Hit Y or N. ")) {
    console.log("\nWelcome to Hangman, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.");
    process.exit()
};

// function playHangman() {

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
};

console.log("... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n ");

console.log("Your word has been chosen. It has " + hiddenWord.length + " letters in it.\n" + "   You only get six wrong guesses.\n" + "    Choose wisely young one. \n");


// creating the magic dash line up.
let wordToGuess = [];
hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
console.log(wordToGuess);

// for (let isGuessCorrect = 5; isGuessCorrect > 0; isGuessCorrect--) {
let wrongGuess = 6;
while (wrongGuess !== 0) {
    // if (wordToGuess === hiddenWord) {
    //     console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n")
    // }

    const userInput = prompt.question("\n" + userName + ", please guess a letter: ");

    letterA = userInput.split('');

    let letter = (letterA[0]);

    // let letterChecker = /^[A-Za-z]+$/;

    if (/[a-zA-Z]/.test(letter)) {

        // if (letterB.match(letterChecker)) {
        console.log("\n You selected " + (letter) + ".\n");
    } else {
        console.log("\n Sorry " + userName + " you must select alphabet characters (a-z) only. ")
    };


    if (alreadyguessed.includes(letter)) {
        // alreadyguessed +1;
        console.log("Sorry, " + userName + " you have already tried that letter.");

    } else {
        alreadyguessed.push(letter);
        console.log("\n Nice guess.");
    };

    // add guesses to inventory of tries.
    // alreadyguessed.push(letter);
    console.log("\n Your guesses so far: [ " + alreadyguessed + ", " + "]\n");

    let lookForLetterInWord2 = () => {
        // console.log('inside lookFOrLEtterWOrd function')
        let wrongGuess = true;
        hiddenWord.split('').forEach((letterInHiddenWord, indexOfLetter) => {
            if (letter === letterInHiddenWord) {
                wordToGuess[indexOfLetter] = letterInHiddenWord
                wrongGuess = false;
                wordToGuess[indexOfLetter] = letter;
                // console.log('adding the incorrect letter')
                // 
            }
        });
        if (wrongGuess) {
            // (wrongGuess - 1);
            console.log("Sorry " + userName + ", that was not correct. \n")
        }
        if (!wrongGuess) {
            console.log(wordToGuess);
            console.log("That was a good guess! Keep going! \n");
        }

    };

    // if (javaScript = annoying) {
    //     computer.throw(outWindow)
    // };


    lookForLetterInWord2()

    if (wordToGuess === hiddenWord) {
        console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n")


    } else {
        --wrongGuess;
        console.log("End of guesses");
        console.log("End of game.  Please try again. \n")
    }
};
// lookForLetterInWord2()

// console.log("End of guesses");
// console.log("End of game.  Please try again. \n")



// let lookForLetterInWord2 = () => {
//     hiddenWord.split('').forEach((letterInHiddenWord, indexOfLetter) => {
//         if (letter === letterInHiddenWord) {
//             wordToGuess[indexOfLetter] = letterInHiddenWord
//         } else {
// console.log("Sorry " + userName + ", that was not correct. \n")
//         };
//     });
// };



// };

// while (goodLetter.indexOf('_') !== -1 && playerGuesses > 0) {

//     console.log("Number of tries left = " + playerGuesses);
//     console.log(wordToGuess.join(" "))
// }
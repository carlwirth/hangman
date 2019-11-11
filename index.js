const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");

// if (javaScript = annoying) {
//     computer.throw(outWindow)
// };

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
};

// reverse the commenting here later 
//   ( lines 7 off & 8 on )
// let hiddenWord = "hangman";
let hiddenWord = wordBank.randomElement();


let roundsTotal = 0;
let alreadyguessed = [];
let goodLetter = [];
let badLetter = [];
let gamesPlayed = 0;
let gamesWon = 0;

// let guesses = [];
// let hiddenStr = wordToGuess.reduce

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
    console.log("\nWelcome to Hangman, " + userName + ".\n");
} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.");
    process.exit()
};

// function playHangman() {

++roundsTotal;
// gamesPlayed += 1;
while (!gamesWon && !gamesPlayed) {
    console.log(hiddenWord);
    console.log(userName + ", so far, you have won " + gamesWon + ", out of " + gamesPlayed + " games.");
    console.log("(Press 'ctrl+c' to stop.)\n")

    // hiddenWord = wordBank.randomElement();

    // Array.prototype.randomElement = function() {
    //     return this[Math.floor(Math.random() * this.length)]
    // };

    console.log("... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n ");

    console.log("Your word has been chosen. It has " + hiddenWord.length + " letters in it.\n" + "   You only get six wrong guesses.\n" + "    Choose wisely young one. \n");


    // creating the magic dash line up.
    let wordToGuess = [];
    hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
    console.log(wordToGuess);

    // let hiddenStr = wordToGuess.reduce

    // for (let isGuessCorrect = 5; isGuessCorrect > 0; isGuessCorrect--) {
    let wrongGuess = 6;
    while (wrongGuess !== 0) {
        if (wordToGuess === hiddenWord) {
            console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n")
            break;
        }

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
            console.log("Sorry, " + userName + " you have already tried that letter.");
            ++wrongGuess;

        } else {
            alreadyguessed.push(letter);
            // console.log("\n Nice guess.");
        };

        // add guesses to inventory of tries.
        console.log("\n Your guesses so far: [ " + alreadyguessed + ", " + "]\n");

        let hiddenStr = wordToGuess.reduce


        let lookForLetterInWord2 = () => {
            let wrongGuess = true;
            hiddenWord.split('').forEach((letterInHiddenWord, indexOfLetter) => {
                if (letter === letterInHiddenWord) {
                    wordToGuess[indexOfLetter] = letterInHiddenWord
                    wrongGuess = false;
                    wordToGuess[indexOfLetter] = letter;

                }
            });
            if (wrongGuess) {
                console.log("Sorry " + userName + ", that was not correct. \n")
            }
            if (!wrongGuess) {
                console.log(wordToGuess);
                console.log("That was a good guess! Keep going! \n");
            }

        };

        // if (javaScript = annoying) 😧  {
        //     computer.throw(outWindow)
        //     😱 
        // };  


        lookForLetterInWord2()

        if (wordToGuess !== hiddenStr) {
            // if (wordToGuess !== hiddenWord) {
            --wrongGuess;


            // console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n")
            // break;


        } else {
            // --wrongGuess;
            // if (hiddenWord.split === wordToGuess) break;
            if (wordToGuess === hiddenStr)
                ++gamesWon;
            // break;
            console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n")
                // break;
            hiddenWord = wordBank.randomElement();

        }
        ++gamesPlayed;
    };


    console.log("End of guesses");
    console.log("End of game. \n");
};
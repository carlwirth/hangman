const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");


let userName = readlineSync.question('\nHello. What is your name? ');
console.log('   Greetings ' + userName + '!');

console.log("\nSo, " + userName + ", would you like to play a game?");

if (readlineSync.keyInYNStrict("   Hit Y or N. ")) {
    console.log("\nWelcome to Hangman, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.");
    process.exit()
};

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
};

let myRandomElement = wordBank.randomElement();

console.log("'" + myRandomElement + "' is the magic word. (I'll hide it later.)\n ");

console.log("'" + myRandomElement + "' has " + myRandomElement.length + " letters in it. \n");


for (let i = 0; i < (myRandomElement.length); i++) {
    console.log(" _ ");
};

const letter = prompt.question(userName + ", please guess a letter: ");

// let letterA = [];
letterA = letter.split('');
console.log(letterA[0]);

function letterChecker(letterA) {
    let letterChecker = /^[A-Za-z]+$/;
    if (letterA.value.match(letterChecker)) {
        console.log("Thank you.")
    } else {
        console.log("Sorry " + userName + " you must select alphabet characters only. ")
    }
};


// {sensitivity, 'base'}

// for (let i = letterCount + 6; i > 0; i--) {
//     console.log(userName + ', you have ' + i + 'guesses left.')
// };

// console.log("\n " + userName + ", would you like to play again?");
// if (readlineSync.promptLoop("   Hit Y or N. ")) {
//     console.log("\nWelcome back, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
// } else {
//     console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.")
// };
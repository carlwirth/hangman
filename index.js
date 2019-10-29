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

let display = "";
for (let i = 0; i < (myRandomElement.length); i++) {
    display += " _ ";
};
console.log(display);

const letter = prompt.question(userName + ", please guess a letter: ");

letterA = letter.split('');
console.log(letterA[0]);

let letterB = (letterA[0]);

let letterChecker = /^[A-Za-z]+$/;

if (letterB.match(letterChecker)) {
    console.log("Thank you.")
} else {
    console.log("Sorry " + userName + " you must select alphabet characters only. ")
}




// for (let i = letterCount + 6; i > 0; i--) {
//     console.log(userName + ', you have ' + i + 'guesses left.')
// };

// console.log("\n " + userName + ", would you like to play again?");
// if (readlineSync.promptLoop("   Hit Y or N. ")) {
//     console.log("\nWelcome back, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
// } else {
//     console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.")
// };
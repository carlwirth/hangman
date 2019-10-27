const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");


let userName = readlineSync.question('\nHello. What is your name? ');
console.log('   Greetings ' + userName + '!');

console.log("\nSo, " + userName + ", would you like to play a game?");
if (readlineSync.keyInYNStrict("   Hit Y or N. ")) {
    console.log("\nWelcome to Hangman, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.")
}

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
};

let myRandomElement = wordBank.randomElement();

console.log("'" + myRandomElement + "' is the magic word. (I'll hide it later.)\n ");

console.log("'" + myRandomElement + "' has " + myRandomElement.length + " letters in it.");



// for (let i = letterCount; i > 0; i--) {
//     console.log(userName + ', you have ' + i + 'guesses left.')
// };
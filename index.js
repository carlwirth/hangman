const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");


let userName = readlineSync.question('Hello. What is your name? ');
console.log('Greetings ' + userName + '!');

console.log("\nSo, " + userName + ", do you want to play a game?");
if (readlineSync.keyInYNStrict("Hit Y or N. ")) {
    console.log("\nWelcome to Hangman, " + userName + ".\n(Press 'ctrl+c' to stop.)\n");
}
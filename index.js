const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");

// this is where you are building your project. 

console.log("\n Welcome to Hangman!\nPress ctrl+c to stop.\n");

const letter = prompt.question("Pick a letter: ");
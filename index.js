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

// Carl's current code thoughts... Different strategy attempt. 

// Array.prototype.randomElement = function() {
//     return this[Math.floor(Math.random() * this.length)]
// };

// let myRandomElement = wordBank.randomElement();

// // The following code creates an array from the randomly chosen word above.
// const guessWord = [myRandomElement];
// console.log(guessWord);


// console.log("Your word has been chosen. It has " + myRandomElement.length + " letters in it.\n");

// let display = "";
// for (let i = 0; i < (myRandomElement.length); i++) {
//     display += "_ ";
// };
// console.log(display);

// console.log("\n" + userName + ", let's begin.");

// // The following code is incomplete; in the future it will check for a single letter in myRandomElement.
// input = readlineSync.question("\nChoose a letter: ");
// if (input = myRandomElement) {
//     console.log("\nYou win!");
//     process.exit();
// } else {
//     console.log("\nSorry... That's wrong.");
//     process.exit();
// };

// My earlier code thoughts...

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
};

let myRandomElement = wordBank.randomElement();

console.log("... '" + myRandomElement + "' is the magic word. (I'll hide it later.)\n ");

console.log("Your word has been chosen. It has " + myRandomElement.length + " letters in it.\n");

let display = "";
for (let i = 0; i < (myRandomElement.length); i++) {
    display += " _ ";
};
console.log(display);

const letter = prompt.question(userName + ", please guess a letter: ");

letterA = letter.split('');

let letterB = (letterA[0]);

let letterChecker = /^[A-Za-z]+$/;

if (letterB.match(letterChecker)) {
    console.log("You selected " + (letterB) + ".");
} else {
    console.log("Sorry " + userName + " you must select alphabet characters only. ")
}

const splitArr = myRandomElement.split("");
// let test = myRandomElement.match(/letterB/gi); 

myRandomElement.split("").forEach((letter, letterIndex) => {
    let x = myRandomElement.find(letterB => letterB === letter);
    if (x) {
        display[letterIndex] = x
    }
});

for (let i = 0; i < (myRandomElement.length); i++) {
    if (letterB.match(test)) {
        console.log(letterB += " _ " + letterB)
    } else {
        console.log("Sorry " + userName + ", please pick again. \n");
    };


    let letterCount = (myRandomElement.length);

    for (let g = ((letterCount - letterB) + 6); g > 0; g--) {
        let h = (g - letterB);
        console.log(userName + ', you have ' + g + 'guesses left.')
    };

    // console.log(test);

    console.log("\n " + userName + ", would you like to play again?");
    if (readlineSync.promptLoop("   Hit Y or N. ")) {
        console.log("\nWelcome back, " + userName + ".\n   (Press 'ctrl+c' to stop.)\n");
    } else {
        console.log("\n...sadness.\n   I'll miss you " + userName + '!' + "\n        Goodbye.");
    };
};

// theWord = [r, o, b];
// hiddenWord = [ * , * , * ];
// theWord.split("").forEach((letter, letterIndex) => {
//     let x = theWord.find(oneLetter => oneLetter === letter);
// if (x) {
//         hiddenWord[letterIndex] = x;
//     };
const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};

let hiddenWord = wordBank.randomElement();
let roundsTotal = 0;
let alreadyguessed = [];
let goodLetter = [];
let badLetter = [];
let gamesPlayed = 0;
let gamesWon = 0;

// body parts
let top = "_______";
let rope = "|     |";
let pole = "|     ";
let platform = "_________";
let head = "|     o";
let body = "|     |";
let leftArm = "|    /|\\";
let rightArm = "|    /|";
let leg1 = "|    / \\";
let leg2 = "|    /";


// let userName = readlineSync.question("\nHello. What is your name? ");
// console.log("   Greetings " + userName + "!");
// console.log("\nSo, " + userName + ", would you like to play a game?");

console.log(top);
console.log(rope);
console.log(pole);
console.log(pole);
console.log(pole);
console.log(platform);
console.log("HANGMAN - The Game");

// let userName = readlineSync.question("\nHello. What is your name? ");
// console.log("   Greetings " + userName + "!");
// console.log("\nSo, " + userName + ", would you like to play a game?");

// startgame();
// let wrongGuess = 6;

// function startgame() {

let wrongGuess = 6;


const drawMan = wrongGuess => {
    console.log("bodyparts", wrongGuess);
    if (wrongGuess === 6) {
        console.log(top);
        console.log(rope);
        console.log(pole);
        console.log(pole);
        console.log(pole);
        console.log(platform);
    }
    if (wrongGuess === 5) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(pole);
        console.log(pole);
        console.log(platform);
    }
    if (wrongGuess === 4) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(body);
        console.log(pole);
        console.log(platform);
    }
    if (wrongGuess === 3) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(rightArm);
        console.log(pole);
        console.log(platform);
    }
    if (wrongGuess === 2) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(leftArm);
        console.log(pole);
        console.log(platform);
    }
    if (wrongGuess === 1) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(leftArm);
        console.log(leg2);
        console.log(platform);
    }
    if (wrongGuess === 0) {
        console.log(top);
        console.log(rope);
        console.log(head);
        console.log(leftArm);
        console.log(leg1);
        console.log(platform);
    }
};
drawMan();


let userName = readlineSync.question("\nHello. What is your name? ");
console.log("   Greetings " + userName + "!");
console.log("\nSo, " + userName + ", would you like to play a game?");
drawMan();

startgame();

function startgame() {

    // if (readlineSync.keyInYNStrict("\n   Hit Y or N. ")) {
    //     console.log("\nWelcome to Hangman, " + userName + ".\n");
    // } else {
    //     console.log(
    //         "\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye."
    //     );
    //     process.exit();
    // };

    // startgame();

    // function startgame() {

    ++roundsTotal;
    while (!gamesWon && !gamesPlayed) {
        console.log(
            userName +
            ", so far, you have won " +
            gamesWon +
            ", out of " +
            gamesPlayed +
            " games."
        );
        console.log("(Press 'ctrl+c' to stop.)\n");

        console.log(
            "... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n "
        );

        console.log(
            "Your word has been chosen. It has " +
            hiddenWord.length +
            " letters in it.\n" +
            "   You only get six wrong guesses.\n" +
            "    Choose wisely young one. \n"
        );
        let wordToGuess = [];
        hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
        console.log(wordToGuess);
        let wrongGuess = 6;
        while (wrongGuess !== 0) {
            console.log("player guesses", wrongGuess);
            //  drawMan(wrongGuess);
            const foundWord = wordToGuess.find(function(element) {
                return element === "_";
            });
            if (!foundWord) break;
            if (wordToGuess === hiddenWord) {
                console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
                break;
                // startgame();
            }
            const userInput = prompt.question(
                "\n" + userName + ", please guess a letter: "
            );
            letterA = userInput.split("");
            let letter = letterA[0];
            if (/[a-zA-Z]/.test(letter)) {
                console.log("\n You selected " + letter + ".\n");
            } else {
                console.log(
                    "\n Sorry " +
                    userName +
                    " you must select alphabet characters (a-z) only. "
                );
                break;
            }
            if (alreadyguessed.includes(letter)) {
                console.log(
                    "Sorry, " + userName + " you have already tried that letter."
                );
            } else {
                alreadyguessed.push(letter);
            }
            // add guesses to inventory of tries.
            console.log("\n Your guesses so far: [ " + alreadyguessed + ", " + "]\n");
            let lookForLetterInWord2 = () => {
                let isWrongGuess = true;
                hiddenWord.split("").forEach((letterInHiddenWord, indexOfLetter) => {
                    if (letter === letterInHiddenWord) {
                        wordToGuess[indexOfLetter] = letterInHiddenWord;
                        isWrongGuess = false;
                        wordToGuess[indexOfLetter] = letter;
                    }
                });

                if (isWrongGuess) {
                    console.log("Sorry " + userName + ", that was not correct. \n");
                    --wrongGuess;
                    drawMan(wrongGuess);
                }
                if (!isWrongGuess) {
                    console.log(wordToGuess);
                    console.log("That was a good guess! Keep going! \n");
                }
            };
            lookForLetterInWord2();
            if (wordToGuess !== hiddenWord) {} else {
                if (wordToGuess === hiddenWord) gamesWon++;
                console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
                // hiddenWord = wordBank.randomElement();
                break;
            }
            gamesPlayed++;
        }
        drawMan(wrongGuess);
        console.log("   End of guesses.");
        console.log("        End of game.");
        console.log("Sorry " + userName + ", but we had fun, yes?? \n");
    };
    wrongGuess = 6;
    startgame();
};
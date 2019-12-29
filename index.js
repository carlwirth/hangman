const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const readlineSync = require("readline-sync");

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};

let roundsTotal = 0;
let alreadyguessed = [];
let goodLetter = [];
let badLetter = [];
let gamesPlayed = 0;
let gamesWon = 0;

//  Body parts
let top = "_______";
let rope = "|     |";
let pole = "|     ";
let platform = "|________";
let head = "|     o";
let body = "|     |";
let leftArm = "|    /|\\";
let rightArm = "|    /|";
let leg1 = "|    / \\";
let leg2 = "|    /";

//  Adding space between node and start of game. 
console.log("\n \n \n \n ");


//  Gallows demo.
console.log(top);
console.log(rope);
console.log(pole);
console.log(pole);
console.log(pole);
console.log(platform);


let wrongGuess = 6;

const drawMan = wrongGuess => {

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

//  Intro
drawMan();
console.log("HANGMAN - The Game ");
let userName = readlineSync.question("\nWhat is your name? ");

console.log("\n \n \n \nGreetings " + userName + ".");
console.log("Would you like to play a game?");
if (readlineSync.keyInYNStrict("          Hit Y or N. ")) {

    console.log("\n \n \n \n \nWelcome to Hangman, " + userName + ".");
    console.log("     " + top);
    console.log("     " + rope);
    console.log("     " + pole);
    console.log("     " + pole);
    console.log("     " + pole);
    console.log("     " + platform);
    console.log("\n***(Press 'ctrl+c' at any time to stop.)*** \n");

} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye.");
    process.exit();
};


startgame();

function startgame() {

    let alreadyguessed = [];
    let hiddenWord = wordBank.randomElement();
    let hiddenWord2 = hiddenWord;

    ++roundsTotal;

    drawMan();

    console.log("\n\nYour word has been chosen. It has " + hiddenWord.length + " letters in it.");
    console.log("Now, you only get six wrong guesses.  So, please, choose wisely. \n");

    // Carl, take this out before finalizing. 
    console.log("\n  157-158 ... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n ");

    let wordToGuess = [];

    hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
    console.log(wordToGuess);

    let wrongGuess = 6;

    while (wrongGuess !== 0) {
        console.log("player guesses", wrongGuess);
        const foundWord = wordToGuess.find(function(element) {
            return element === "_";
        });


        const userInput = prompt.question("\n" + userName + ", please guess a letter: ");
        letterA = userInput.split("");
        let letter = letterA[0];
        if (/[a-zA-Z]/.test(letter)) {
            console.log("\n You selected " + letter + ".\n");
        } else {
            console.log("\n Sorry " + userName + " you must select alphabet characters (a-z) only. ");
            break;
        };


        if (alreadyguessed.includes(letter)) {
            console.log("Sorry, " + userName + " you have already tried that letter.");
        } else {
            alreadyguessed.push(letter);
        };


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
                console.log("That was a good guess! \n");
            }
        };

        lookForLetterInWord2();
        if (wordToGuess.join('') === hiddenWord) {
            if (wordToGuess.join('') === hiddenWord) {
                gamesWon++;
                console.log("\nWELL DONE, " + userName + "!!  Great job..!!!\n");
                break;
            }
        };
    };


    console.log("That is the end of this round.");
    drawMan(wrongGuess);

    console.log("\n(The hidden word was " + hiddenWord + ".) \n\n");
    gamesPlayed++;

    console.log(userName + ", so far, you have won " + gamesWon + ", out of " + gamesPlayed + " games played.");
    console.log("Would you like to play another exciting round? ")


    if (readlineSync.keyInYNStrict("     Hit Y or N. ")) {
        startgame();
    } else {
        console.log("\n\n...sadness.\n   I'll miss you " + userName + "!")
        console.log("\nThis concludes our time together.\n    Goodbye. \n\n\n");
    }
};
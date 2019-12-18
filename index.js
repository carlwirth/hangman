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


console.log("\n \n HANGMAN - The Game ");

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

drawMan();

let userName = readlineSync.question("\n What is your name? ");

console.log("\n       Hello " + userName + ", would you like to play a game?");
if (readlineSync.keyInYNStrict("                     Hit Y or N. ")) {

    console.log("\nWelcome to Hangman, " + userName + ".\n");
    console.log("(Press 'ctrl+c' at any time to stop.)\n");

} else {
    console.log("\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye.");
    process.exit();
};


drawMan();

startgame();

function startgame() {

    let alreadyguessed = [];
    let hiddenWord = wordBank.randomElement();

    // Another attempt to count the number of winning games. 
    // THis is an attempt to use hiddenWord2 as a way to capture hidden word before it gets split. Just in case that is the problem.
    let hiddenWord2 = hiddenWord;


    // this is a test console.log --  Kill it out later. 
    console.log("games won", gamesWon);

    ++roundsTotal;

    console.log(userName + ", so far, you have won " +
        gamesWon + ", out of " + gamesPlayed + " games.");

    // Carl, take this out before finalizing. 
    console.log("\n  ... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n ");

    // let hiddenWord2 = hiddenWord;

    console.log("Your word has been chosen. It has " +
        hiddenWord.length + " letters in it.\n" +
        "   You only get six wrong guesses. So, please choose wisely young one. \n");


    let wordToGuess = [];

    hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
    console.log(wordToGuess);

    let wrongGuess = 6;

    while (wrongGuess !== 0) {
        console.log("player guesses", wrongGuess);
        const foundWord = wordToGuess.find(function(element) {
            return element === "_";
        });


        if (!foundWord) break;
        if (wordToGuess === hiddenWord2) {
            gamesWon++;
            console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
            break;
        }


        const userInput = prompt.question("\n" + userName + ", please guess a letter: ");
        letterA = userInput.split("");
        let letter = letterA[0];
        if (/[a-zA-Z]/.test(letter)) {
            console.log("\n You selected " + letter + ".\n");
        } else {
            console.log("\n Sorry " + userName + " you must select alphabet characters (a-z) only. ");
            break;
        }

        if (alreadyguessed.includes(letter)) {
            console.log("Sorry, " + userName + " you have already tried that letter.");
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

            if (wordToGuess === hiddenWord) {
                gamesWon++;

                console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
                // ++gamesWon
                break;
            }
            // ++gamesWon

        }
        // Another attempt to count the number of winning games. 
        // if (wordToGuess !== hiddenWord) {} else {

        //     if (wordToGuess === hiddenWord) {
        //         gamesWon++;

        //         console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
        //         // ++gamesWon
        //         // break;
        //     }
        //     // ++gamesWon

        // };

    };

    // Another attempt to count the number of winning games. 
    if (wordToGuess === hiddenWord2) {
        gamesWon++;
        console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
    };


    drawMan(wrongGuess);
    console.log("   End of guesses.");
    console.log("        End of game.");
    console.log(" The word was " + hiddenWord + ".")
    console.log("\n Sooo..." + userName + ", would you like to play again?");

    // this is a test log --  Kill it out later. 
    console.log("\ngames won", gamesWon);

    let response = readlineSync.question("                                       Hit y for another exiting round. ");
    if (response === "y") {

        gamesPlayed++;
        startgame();
    } else {
        console.log("\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye.");
    }
}




// const prompt = require("readline-sync");
// const wordBank = require("./word-bank.json");
// const readlineSync = require("readline-sync");

// Array.prototype.randomElement = function() {
//     return this[Math.floor(Math.random() * this.length)];
// };

// let roundsTotal = 0;
// let alreadyguessed = [];
// let goodLetter = [];
// let badLetter = [];
// let gamesPlayed = 0;
// let gamesWon = 0;

// // body parts
// let top = "_______";
// let rope = "|     |";
// let pole = "|     ";
// let platform = "_________";
// let head = "|     o";
// let body = "|     |";
// let leftArm = "|    /|\\";
// let rightArm = "|    /|";
// let leg1 = "|    / \\";
// let leg2 = "|    /";


// console.log("\n \n HANGMAN - The Game ");

// console.log(top);
// console.log(rope);
// console.log(pole);
// console.log(pole);
// console.log(pole);
// console.log(platform);


// let wrongGuess = 6;

// const drawMan = wrongGuess => {

//     if (wrongGuess === 6) {
//         console.log(top);
//         console.log(rope);
//         console.log(pole);
//         console.log(pole);
//         console.log(pole);
//         console.log(platform);
//     }
//     if (wrongGuess === 5) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(pole);
//         console.log(pole);
//         console.log(platform);
//     }
//     if (wrongGuess === 4) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(body);
//         console.log(pole);
//         console.log(platform);
//     }
//     if (wrongGuess === 3) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(rightArm);
//         console.log(pole);
//         console.log(platform);
//     }
//     if (wrongGuess === 2) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(leftArm);
//         console.log(pole);
//         console.log(platform);
//     }
//     if (wrongGuess === 1) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(leftArm);
//         console.log(leg2);
//         console.log(platform);
//     }
//     if (wrongGuess === 0) {
//         console.log(top);
//         console.log(rope);
//         console.log(head);
//         console.log(leftArm);
//         console.log(leg1);
//         console.log(platform);
//     }
// };

// drawMan();

// let userName = readlineSync.question("\n What is your name? ");

// console.log("\n       Hello " + userName + ", would you like to play a game?");
// if (readlineSync.keyInYNStrict("                     Hit Y or N. ")) {

//     console.log("\nWelcome to Hangman, " + userName + ".\n");
//     console.log("(Press 'ctrl+c' at any time to stop.)\n");

// } else {
//     console.log("\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye.");
//     process.exit();
// };


// drawMan();

// startgame();

// function startgame() {

//     let alreadyguessed = [];
//     let hiddenWord = wordBank.randomElement();

//     // Another attempt to count the number of winning games. 
//     // THis is an attempt to use hiddenWord2 as a way to capture hidden word before it gets split. Just in case that is the problem.
//     let hiddenWord2 = hiddenWord;


//     // this is a test console.log --  Kill it out later. 
//     console.log("games won", gamesWon);

//     ++roundsTotal;

//     console.log(userName + ", so far, you have won " +
//         gamesWon + ", out of " + gamesPlayed + " games.");

//     // Carl, take this out before finalizing. 
//     console.log("\n  ... '" + hiddenWord + "' is the magic word. (I'll hide it later.)\n ");

//     // let hiddenWord2 = hiddenWord;

//     console.log("Your word has been chosen. It has " +
//         hiddenWord.length + " letters in it.\n" +
//         "   You only get six wrong guesses. So, please choose wisely young one. \n");


//     let wordToGuess = [];

//     hiddenWord.split("").forEach(letterInHiddenWord => wordToGuess.push("_"));
//     console.log(wordToGuess);

//     let wrongGuess = 6;

//     while (wrongGuess !== 0) {
//         console.log("player guesses", wrongGuess);
//         const foundWord = wordToGuess.find(function(element) {
//             return element === "_";
//         });


//         if (!foundWord) break;
//         if (wordToGuess === hiddenWord2) {
//             gamesWon++;
//             console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
//             break;
//         }


//         const userInput = prompt.question("\n" + userName + ", please guess a letter: ");
//         letterA = userInput.split("");
//         let letter = letterA[0];
//         if (/[a-zA-Z]/.test(letter)) {
//             console.log("\n You selected " + letter + ".\n");
//         } else {
//             console.log("\n Sorry " + userName + " you must select alphabet characters (a-z) only. ");
//             break;
//         }

//         if (alreadyguessed.includes(letter)) {
//             console.log("Sorry, " + userName + " you have already tried that letter.");
//         } else {
//             alreadyguessed.push(letter);
//         }

//         // add guesses to inventory of tries.
//         console.log("\n Your guesses so far: [ " + alreadyguessed + ", " + "]\n");
//         let lookForLetterInWord2 = () => {
//             let isWrongGuess = true;
//             hiddenWord.split("").forEach((letterInHiddenWord, indexOfLetter) => {
//                 if (letter === letterInHiddenWord) {
//                     wordToGuess[indexOfLetter] = letterInHiddenWord;
//                     isWrongGuess = false;
//                     wordToGuess[indexOfLetter] = letter;
//                 }
//             });

//             if (isWrongGuess) {
//                 console.log("Sorry " + userName + ", that was not correct. \n");
//                 --wrongGuess;
//                 drawMan(wrongGuess);
//             }
//             if (!isWrongGuess) {
//                 console.log(wordToGuess);
//                 console.log("That was a good guess! Keep going! \n");
//             }
//         };


//         lookForLetterInWord2();
//         if (wordToGuess !== hiddenWord) {} else {

//             if (wordToGuess === hiddenWord) {
//                 gamesWon++;

//                 console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
//                 // ++gamesWon
//                 break;
//             }
//             // ++gamesWon

//         }
//         // Another attempt to count the number of winning games. 
//         // if (wordToGuess !== hiddenWord) {} else {

//         //     if (wordToGuess === hiddenWord) {
//         //         gamesWon++;

//         //         console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
//         //         // ++gamesWon
//         //         // break;
//         //     }
//         //     // ++gamesWon

//         // };

//     };

//     // Another attempt to count the number of winning games. 
//     if (wordToGuess === hiddenWord2) {
//         gamesWon++;
//         console.log("\n WELL DONE..!!!" + userName + ", Great job..!!!\n");
//     };


//     drawMan(wrongGuess);
//     console.log("   End of guesses.");
//     console.log("        End of game.");
//     console.log("\n           Sooo..." + userName + ", would you like to play again?");

//     // this is a test log --  Kill it out later. 
//     console.log("\ngames won", gamesWon);

//     let response = readlineSync.question("                                       Hit y for another exiting round. ");
//     if (response === "y") {

//         gamesPlayed++;
//         startgame();
//     } else {
//         console.log("\n...sadness.\n   I'll miss you " + userName + "!" + "\n        Goodbye.");
//     }
// }
let wrongGuessesAllowed = 6;
while (wrongGuessesAllowed !== 0) {
    // ( continueCondition ) - when false, this will stop
    // Get user input, blah, blah
    // Logic where you set isCorrectGuess to true or false
    if (isCorrectGuess) {
        console.log("Success guess message");
        if (guessedEntireWord) { // You will have to set this somehow
            // See https://slides.com/accjavascript/deck-10#/15
        }
    } else {
        --wrongGuessesAllowed;
        console.log("sorry, incorrect");
    }
}
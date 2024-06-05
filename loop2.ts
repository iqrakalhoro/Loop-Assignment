// 2. Guessing Game (Using while loop )
// 1
let maxValue = 50;
// 2
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber}`);
// 3
let isGuessCorrect = false;
// 4
const guesses = [12, 34, 45, 20, 15, 18, 30, 35, 10, 40];
// 5 
let guess = 0;
while (!isGuessCorrect && guess < guesses.length) {
    // Get the current guess
    const currentGuess = guesses[guess];
    console.log(`User's guess: ${currentGuess}`);
    
    // Step 6: Check if the current guess matches the random number
    if (currentGuess === randomNumber) {
        console.log('Congratulations! You guessed the correct number.');
        isGuessCorrect = true;
    } else if (currentGuess < randomNumber) {
        console.log('Your guess is too low.');
    } else {
        console.log('Your guess is too high.');
    }
    guess++
}
if(!isGuessCorrect){
    console.log("No more guesses left")
}
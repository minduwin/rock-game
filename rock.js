// ** Computer' choice **
// Created an array to store my values
// Used the Math.random() to return random values
const arr = ['rock', 'paper', 'scissor'];
function getComputerChoice(arr) {
    return arr[Math.foor(Math.random() * arr.length)];
}
const computerSelection = getComputerChoice(arr);

// ** Game Round **
// Created 2 variables to receive the points
// Main function receive 2 arguments - player and computer' choice
// Loop for each value, comparing choices and return the winner (or draw)
// In every round, variables receive winners' points
let computerPoints = 0;
let yourPoints = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            alert('Computer win.');
            computerPoints += 1;
        } else if (computerSelection === 'scissor') {
            alert('You win.');
            yourPoints += 1;
        } else {
            alert("It's a draw.");
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            alert('You win.');
            yourPoints += 1;
        } else if (computerSelection === 'scissor') {
            alert('Computer win.');
            computerPoints += 1;
        } else {
            alert("It's a draw.")
        }
    } else if (playerSelection === 'scissor') {
        if(computerSelection === 'rock') {
            alert('Computer win.');
            computerPoints += 1;
        } else if (computerSelection === 'paper') {
            alert('You win.');
            yourPoints += 1;
        } else {
            alert("It's a draw.")
        }
    }
};
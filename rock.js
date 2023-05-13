// ** Computer' choice **
// Created an array to store my values
// Used the Math.random() to return random values
const arr = ['rock', 'paper', 'scissor'];
function getComputerChoice(arr) {
    return arr[Math.foor(Math.random() * arr.length)];
}
const computerSelection = getComputerChoice(arr);
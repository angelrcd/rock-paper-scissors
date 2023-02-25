import simulateGame from "./modules/match";

// Necessary DOM elements selections
const cpuScoreDOM = document.querySelector(".cpu-score");
const playerScoreDOM = document.querySelector(".player-score");
const playerChoiceButtons = document.querySelectorAll(".player-choice-container button");
const playButton = document.querySelector(".begin-match-button")

// Event Listeners
playerChoiceButtons.forEach((choiceButton, index) => {
  choiceButton.addEventListener("click", () => setPlayerChoice(index))
})

// States
let playerChoice = null;
let cpuChoice = null;
let matchHistory = []

// Declaracion de funciones
/**
 * Changes the value of current player choice
 * @param {number} choice Must be a number between 0-2
 */
function setPlayerChoice(choice) {
  playerChoice = choice
}

/**
 * Changes the value of cpu choice to random choice: integer between 0-2
 */
function generateCPUChoice() {
  cpuChoice = Math.floor(Math.random() * 3);
}
import simulateGame from "./modules/match";

// Necessary DOM elements selections
const cpuScoreDOM = document.querySelector(".cpu-score");
const playerScoreDOM = document.querySelector(".player-score");
const playerChoiceButtons = document.querySelectorAll(".player-choice-container button");
const playButton = document.querySelector(".begin-match-button")
const resultDisplay = document.querySelector(".result")
const countdownDisplay = document.querySelector(".countdown")

// Event Listeners
playerChoiceButtons.forEach((choiceButton, index) => {
  choiceButton.addEventListener("click", () => setPlayerChoice(index))
})

playButton.addEventListener("click", beginMatch)

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

/**
 * Display on the screen the result of the current game
 * @param {number} gameResult 
 */
function displayResult(gameResult){
  let result = ""
  switch(gameResult){
    case -1:
      result = "You lost!"
      break;
    case 0:
      result = "Tie!"
      break;
    case 1:
      result = "You won!"
      break;
  }

  resultDisplay.textContent = result;
  resultDisplay.classList.remove("hidden")
}

/**
 * Hides the result in display
 */
function hideResult(){
  resultDisplay.classList.add("hidden")
}

function beginMatch(){
  generateCPUChoice()
  const gameResult = simulateGame(playerChoice, cpuChoice);
  displayResult(gameResult)
  matchHistory.push(gameResult)
  console.log(matchHistory)
}
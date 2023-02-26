import simulateGame from "./modules/match";
import countdown from "./modules/countdown";
import insertMatch from "./modules/historyTable";
import { reEnableButtons, disableButtons } from "./modules/disableButtons";

// Necessary DOM elements selections
const cpuScoreDOM = document.querySelector(".cpu-score");
const playerScoreDOM = document.querySelector(".player-score");

const cpuChoiceDisplay = document.querySelector(".cpu-choice")
const countdownDisplay = document.querySelector(".countdown")
const resultDisplay = document.querySelector(".result")

const playerChoiceButtons = document.querySelectorAll(".player-choice-container button");
const playButton = document.querySelector(".begin-match-button")

// Event Listeners
playerChoiceButtons.forEach((choiceButton, index) => {
  choiceButton.addEventListener("click", () => {
    clearSelection()
    setPlayerChoice(index);
    choiceButton.classList.add("selected")
  })
})

playButton.addEventListener("click", beginMatch)

// States
let playerChoice = null;
let cpuChoice = null;
let matchHistory = []
let playerVictories = 0
let cpuVictories = 0

// Set players score in display
displayScores()

// Function declaration

/**
 * 
 * @param {number} num If -1 counts CPU victories, 1 counts player
 * @returns number of victories of cpu or player
 */
function countVictories(num){
  return matchHistory.reduce((acc, val)=>{
    if (val === num){
      acc++;
    }
    return acc;
  }, 0)
}

function displayScores(){
  playerVictories = countVictories(1)
  cpuVictories = countVictories(-1)
  cpuScoreDOM.textContent = cpuVictories;
  playerScoreDOM.textContent = playerVictories;
}

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

function displayCpuChoice(){
  const choice = ["Rock", "Paper", "Scissors"];
  cpuChoiceDisplay.textContent=choice[cpuChoice];
}

/**
 * Hides the result in display
 */
function hideResult(){
  resultDisplay.classList.add("hidden")
}

function clearSelection(){
  playerChoiceButtons.forEach(button => button.classList.remove("selected"))
}

async function beginMatch(){
  disableButtons()
  generateCPUChoice()
  const gameResult = simulateGame(playerChoice, cpuChoice);
  await countdown()
  displayResult(gameResult)
  displayCpuChoice()
  reEnableButtons()
  matchHistory.push(gameResult)
  displayScores()
  insertMatch(matchHistory.length, gameResult)
}
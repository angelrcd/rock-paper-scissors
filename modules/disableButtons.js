const playerChoiceButtons = document.querySelectorAll(".player-choice-container button");
const playButton = document.querySelector(".begin-match-button")

export function disableButtons(){
  playButton.disabled = true;
  playerChoiceButtons.forEach(button => button.disabled = true)
}

export function reEnableButtons(){
  playButton.disabled = false;
  playerChoiceButtons.forEach(button => button.disabled = false)
}
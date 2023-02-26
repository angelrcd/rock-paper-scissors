const table = document.querySelector("table")

export default function insertMatch(number, winner){
  const row = table.insertRow()
  let winnerText;
  if (winner === 1) {
    winnerText = "You"
    row.classList.add("winner-row");
  } else if (winner === -1)  {
    winnerText = "CPU"
    row.classList.add("loser-row");
  } else {
    winnerText = "Tie"
  }


  const firstCell = row.insertCell();
  firstCell.textContent = number

  const secondCell = row.insertCell();
  secondCell.textContent = winnerText;
}
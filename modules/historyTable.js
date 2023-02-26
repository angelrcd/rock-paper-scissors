const table = document.querySelector("table")

export default function insertMatch(number, winner){
  const row = table.insertRow()

  const firstCell = row.insertCell();
  firstCell.textContent = number
  const secondCell = row.insertCell();
  secondCell.textContent = winner
}
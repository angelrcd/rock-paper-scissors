/**
 * Begins the match
 * @param {number} playerChoice 
 * @param {number} cpuChoice 
 * @returns -1 if player lost, 0 if tie, 1 if player won
 */
export default function simulateGame(playerChoice, cpuChoice){
  if(playerChoice === cpuChoice) return 0;

  const game = String(playerChoice) + String(cpuChoice);

  const dictionary = {
    '01': -1,
    '02': 1,
    '10': 1,
    '12': -1,
    '20': -1,
    '21': 1,
  }

  return dictionary[game]
}
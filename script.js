function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const selection = Math.floor(Math.random() * 100) % 3;
  return options[selection];
}

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  console.log(playerSelection);

  if (playerSelection == computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors ") ||
    (playerSelection == "Paper" && computerSelection == "Rock ") ||
    (playerSelection == "Scissors" && computerSelection == "Paper ")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${playerSelection} loses to ${computerSelection}.`;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

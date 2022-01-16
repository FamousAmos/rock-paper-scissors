let playerScore = 0;
let computerScore = 0;
const options = ["Rock", "Paper", "Scissors"];
// let playerSelection;

function computerPlay() {
  const selection = Math.floor(Math.random() * 100) % 3;
  return options[selection];
}

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection == computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore += 1;
    return `You lose! ${playerSelection} loses to ${computerSelection}.`;
  }
}

function checkWinner() {
  if (playerScore > computerScore) {
    return `You beat the computer ${playerScore} to ${computerScore}!`;
  } else if (computerScore > playerScore) {
    return `You lose to the computer ${computerScore} to ${playerScore}!`;
  } else {
    return `No winner this game! You both scored ${playerScore}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = window.prompt("Select Rock, Paper, or Scissors");

    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(checkWinner());
}

game();

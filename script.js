let playerSelection;
let playerScore = 0;
let computerScore = 0;
const options = ["Rock", "Paper", "Scissors"];
let buttons = document.querySelectorAll(".button");
const results = document.querySelector(".results");
const playerScoreBox = document.querySelector("#player-score");
const computerScoreBox = document.querySelector("#computer-score");
const retry = document.querySelector(".retry");

function computerPlay() {
  const selection = Math.floor(Math.random() * 100) % 3;
  return options[selection];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    results.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore += 1;
    playerScoreBox.textContent = playerScore;
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore += 1;
    computerScoreBox.textContent = computerScore;
    results.textContent = `You lose! ${playerSelection} loses to ${computerSelection}.`;
  }

  if (playerScore == 5 || computerScore == 5) {
    checkWinner();
  }
}

function checkWinner() {
  if (playerScore > computerScore) {
    results.textContent = `You beat the computer!`;
  } else if (computerScore > playerScore) {
    results.textContent = `You lost to the computer!`;
  }
  retry.classList.remove("hide");
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScoreBox.textContent = playerScore;
  computerScoreBox.textContent = computerScore;
  results.textContent = "";
  retry.classList.add("hide");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selection = button.querySelector("img");
    playerSelection = selection.alt;
    if (playerScore < 5 && computerScore < 5) {
      playRound(playerSelection, computerPlay());
    }
  });
});

retry.addEventListener("click", () => {
  reset();
});

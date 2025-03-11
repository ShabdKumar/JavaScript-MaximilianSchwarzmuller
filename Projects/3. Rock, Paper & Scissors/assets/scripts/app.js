const startGameBtn = document.getElementById("start-game-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const showLogBtn = document.getElementById("show-game-logs-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSOR";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;
let gameLogs = [];

const getPlayerChoice = () => {
  let playerChoice;
  try {
    playerChoice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
  } catch (err) {
    alert("Please insert something.");
    return getPlayerChoice();
  }

  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSORS
  ) {
    // alert(
    //   `You chose a invalid value. Processing with ${DEFAULT_CHOICE} as default`
    // );
    return;
  }

  return playerChoice;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === ROCK)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

// const getWinner = function (pChoice, cChoice) {
//   if (pChoice === cChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (pChoice === ROCK && cChoice === PAPER) ||
//     (pChoice === PAPER && cChoice === SCISSORS) ||
//     (pChoice === SCISSORS && cChoice === ROCK)
//   ) {
//     return RESULT_COMPUTER_WINS;
//   } else {
//     return RESULT_PLAYER_WINS;
//   }
// };
function startGame() {
  if (gameIsRunning) {
    alert("Game is still running.");
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let message = `You selected ${
    playerSelection ? playerSelection : DEFAULT_CHOICE
  }, computer selected ${computerSelection}. So you `;
  let result;
  if (playerSelection) {
    result = getWinner(computerSelection, playerSelection);
  } else {
    result = getWinner(computerSelection);
  }
  result === RESULT_DRAW
    ? (message += "got a draw.")
    : result == RESULT_COMPUTER_WINS
    ? (message += "lost.")
    : (message += "won.");
  alert(message);
  let gameLog = {
    player: playerSelection ? playerSelection : DEFAULT_CHOICE,
    computer: computerSelection,
    result: result,
  };
  gameLogs.push(gameLog);
}

startGameBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", () => {
  gameIsRunning = false;
  startGame();
});

showLogBtn.addEventListener("click", () => {
  console.log(gameLogs);
});

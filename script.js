let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;  // Round counter

// Select DOM elements for buttons and score
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const scoreBoard = document.getElementById("scoreBoard");
const roundWinner = document.getElementById("roundWinner");
const gameWinner = document.getElementById("gameWinner");
const roundCounter = document.getElementById("roundCounter");  // To display round number
const resetBtn = document.getElementById("resetBtn"); // Reset button

// Function to get the computer's choice
function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// Function to update the score on the page
function updateScore(){
  scoreBoard.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
}

// Function to play a single round and determine the winner
function playRound(humanChoice, computerChoice){
  let result = '';

  if (humanChoice === computerChoice){
    result = 'It\'s a tie!';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ){
    humanScore++;
    result = 'You win this Round!';
  } else {
    computerScore++;
    result = 'Computer wins this Round!';
  }

  roundWinner.textContent = `Round Winner: ${result}`;
  updateScore();
  roundCounter.textContent = `Round: ${roundNumber}`;  // Display current round number
  roundNumber++;  // Increment round number

  // Check for game winner after each round
  if (humanScore === 4) {
    gameWinner.textContent = `Game Winner: Congratulations! You win with a score of ${humanScore} to ${computerScore}!`;
    disableButtons();
  } else if (computerScore === 4) {
    gameWinner.textContent = `Game Winner: Sorry, the computer wins with a score of ${computerScore} to ${humanScore}. Better luck next time!`;
    disableButtons();
  }
}

// Disable buttons once someone wins the game
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Reset the game (reset scores, round number, and enable buttons)
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundNumber = 1;

  roundWinner.textContent = 'Round Winner: ';
  gameWinner.textContent = 'Game Winner: ';
  roundCounter.textContent = `Round: ${roundNumber}`;
  updateScore();

  // Enable buttons again
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

// Add event listeners to buttons
rockBtn.addEventListener('click', function(){
  if(humanScore < 4 && computerScore < 4){
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
});

paperBtn.addEventListener('click', function(){
  if(humanScore < 4 && computerScore < 4){
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
});

scissorsBtn.addEventListener('click', function(){
  if(humanScore < 4 && computerScore < 4){
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
});

// Add event listener for reset button
resetBtn.addEventListener('click', resetGame);

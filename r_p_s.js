const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const buttonChoices = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const gameDisplay = document.getElementById('game-display');
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0; 
let playerChoice;
let computerChoice;

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
   playerChoice = e.target.id
   playerChoiceDisplay.innerHTML = playerChoice
   getComputerChoice();
   compareChoices();
}));

function getComputerChoice() {
   computerChoice = choices[Math.floor(Math.random(choices) * choices.length)];
   computerChoiceDisplay.innerHTML = computerChoice
   };

function compareChoices() {
   
   var game = ""
   if (playerChoice === computerChoice) {
       result = "It's a draw."
   }
   if
      ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
         result = `You win! ${playerChoice} beats ${computerChoice}.` 
      playerScore +=1;
      
      if (playerScore == 5) {
         var game = "Congratulations! You win the game!"
      }
       
   } 
   if ((computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "rock")) {
         result = `Computer wins! ${computerChoice} beats ${playerChoice}.`
      computerScore +=1;

      if (computerScore == 5) {
         var game = "Game over. Computer wins."
      }
   }
   resultDisplay.innerHTML = result
   playerScoreDisplay.innerHTML = playerScore
   computerScoreDisplay.innerHTML = computerScore
   gameDisplay.innerHTML = game
   console.log("player " + playerScore);
   console.log("cpu    " + computerScore);
}; 
//function game()
//function getComputerChoice
//function getPlayerChoice
//function playRound
//function to compare choices
//score count

function getPlayerChoice() {
   let playerInput = prompt("Choose rock, paper or scissors".toLowerCase());
   return playerInput;
};
console.log("You chose " + prompt());

function getComputerChoice() {
   const randomChoice = (Math.floor(Math.random() * 3));
   if (randomChoice === 0 ) {
      return "rock";
   } else if (randomChoice === 1 ) {
      return "paper";
   } else if (randomChoice === 2 ) {
      return "scissors";
   }
};
console.log("Computer chose " + getComputerChoice());


function compareChoices(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) {
      return "Draw";
   }
   if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')) {
      return "You win";
   } 
   return "Computer wins";
};
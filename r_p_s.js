//function getPlayerChoice - done
//function getComputerChoice - done
//function to compare choices - done
//function game()
//function playRound
//score count

//const prompt = require("prompt-sync")();

let playerChoice = getPlayerChoice();

function getPlayerChoice() {
   let playerInput = prompt("Choose rock, paper or scissors: ");
   return playerInput.toLowerCase();
};

console.log(`You chose: ${playerChoice}`);

let computerChoice = getComputerChoice();

function getComputerChoice() {
   let choices = ["rock", "paper", "scissors"];
   let randomChoice = choices[Math.floor(Math.random(choices) * choices.length)];
   return randomChoice;
   };
 
console.log(`Computer chose: ${computerChoice}`)

function compareChoices(playerChoice, computerChoice) {

   if (playerChoice === computerChoice) {
      console.log("Draw");
   }
   else if
      ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
      console.log("You win");
   } 
   else {
      console.log("Computer wins");
   }
}; 

compareChoices(playerChoice, computerChoice);






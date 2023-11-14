//function getPlayerChoice - done
//function getComputerChoice - done
//function to compare choices - done
//function game() -done
//function playRound -done
//score count

const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
   let playerInput = false;
   while(playerInput == false){
       const choice = prompt("Chose rock, paper or scissors: ");
       if(choice == null){
           continue;
       }
       const choiceInLower = choice.toLowerCase();
       if(choices.includes(choiceInLower)){
           playerInput = true;
           return choiceInLower;
       }
   } 
};

function getComputerChoice() {
   let randomChoice = choices[Math.floor(Math.random(choices) * choices.length)];
   return randomChoice;
   };
 
function compareChoices(playerChoice, computerChoice) {

   if (playerChoice === computerChoice) {

      console.log("\nIt's a draw.");
   }
   else if
      ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
      playerScore++
      console.log(`\nPlayer chose: ${playerChoice}`);
      console.log("Player: " + playerScore);
   } 
   else {
      computerScore++
      console.log(`\nComputer chose: ${computerChoice}`);
      console.log("Computer: " + computerScore);
   }
}; 

function game() {
   for (let i = 0; i < 5; i++) {
      let playerSelection = getPlayerChoice();
      let computerSelection = getComputerChoice();
      compareChoices(playerSelection, computerSelection);
   }
};
game();




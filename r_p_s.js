
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const buttonChoices = document.querySelectorAll('button');
const choices = ["rock", "paper", "scissors"];
let playerChoice
let computerChoice

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

   if (playerChoice === computerChoice) {
      result = "It's a draw!"
   }
   if
      ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
      result = "You win!" 
   } 
   if ((computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "rock")) {
      result = "Computer wins!"  
   }
   resultDisplay.innerHTML = result
}; 












/*const choices = ["rock", "paper", "scissors"];
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

     
   }
   else if
      ((playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")) {
      playerScore++
     
   } 
   else {
      computerScore++
      
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
*/




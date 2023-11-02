


// function cpu random choice to return rock, paper or scissors
// Math.random
// compare values to rock, paper or scissors
// if <1 - rock, if <2 - paper, if <3 then scissors

//function user input choice to choose rock, paper or scissors

//rock is < paper, paper is < scissors, scissors is < rock


// list of choices
let computerSelection = [0, 1, 2];
// player choice input
let playerSelection = prompt("rock, paper or scissors"); 

console.log("You chose " + playerSelection.toLowerCase());

// computer choice random
function getComputerChoice() {
   return Math.floor(Math.random()*3);
}

if (getComputerChoice([]) === 0) {
   computerSelection = "rock";
} else {
   if (getComputerChoice([]) === 1) {
      computerSelection = "paper";
   } else {
      computerSelection = "scissors";
   }
};
console.log("Computer chose " + computerSelection.toLowerCase());


// choice comparison
// declare win, lose, draw
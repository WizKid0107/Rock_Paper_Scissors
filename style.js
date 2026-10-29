"use strict";

/* 
Create a new function named getComputerChoice

So far I can use a if,else if and else with a return for each and I'm thinking to first get a reandom number that will equal to the value/string which I need four right now

Math.floor(Math.random() * 4);

how can I get a number to return a string
“rock”, “paper” or “scissors” "tie"

function chooseLetter(value) {
    if (value === "first") {
        return "a";
    } else if (value === "second") {
        return "b";
    } else {
        return "c";
    }
}

*/




function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
if(number === 0){
    return "scissors";
    }
    else if (number === 1){
return "paper";
    }
    else
        return "rock";
}

function getHumanChoice() {
    let humanChoice1 = prompt("Enter Rock, Paper or Scissors").toLowerCase();  
    return humanChoice1; 
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("It's a tie!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore = humanScore + 1;
      console.log("You win!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win!");
      humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore = humanScore + 1;
      console.log("You win!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore = computerScore + 1;
      console.log("You lose!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore = computerScore + 1;
      console.log("You lose!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore = computerScore + 1;
      console.log("You lose!");
    }
  }
 
 playRound(humanChoice, computerChoice);
 console.log(humanScore);
 console.log(computerScore);
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice();
 console.log(humanChoice)
 console.log(computerChoice)
 playRound(humanChoice, computerChoice);
 console.log(humanScore);
 console.log(computerScore);
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice();
 console.log(humanChoice);
 console.log(computerChoice);
 playRound(humanChoice, computerChoice);
 console.log(humanScore);
 console.log(computerScore);
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice();
 console.log(humanChoice);
 console.log(computerChoice);
 playRound(humanChoice, computerChoice);
 console.log(humanScore);
 console.log(computerScore);
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice();
 console.log(humanChoice);
 console.log(computerChoice);
 console.log(humanScore);
 console.log(computerScore);
 playRound(humanChoice, computerChoice);
 
 if (humanScore > computerScore){
    alert("YOU WON THE GAME!");
    // console.log("YOU WON THE GAME!")
 }
 else if(humanScore === computerScore){
    alert("IT'S A TIE GAME!");
    // console.log("IT'S A TIE GAME!")
 }
 else{
    alert("YOU LOSE THE GAME!");
    // console.log("YOU LOSE THE GAME!")
 }
}
playGame()

// Human: rock
// Computer: scissors
// Result: human wins

// Human: rock
// Computer: paper
// Result: human loses

// Human: rock
// Computer: rock
// Result: tie

// Human: paper
// Computer: scissors
// Result: human loses

// Human: paper
// Computer: paper
// Result: tie

// Human: paper
// Computer: rock
// Result: human wins

// Human: scissors
// Computer: scissors
// Result: tie

// Human: scissors
// Computer: paper
// Result: human wins

// Human: scissors
// Computer: rock
// Result: human loses

// if (user >= 18)

// function shipping(){
//     packageWeight = 42;
//     weightLimit = 50;
//     if (packageWeight <= weightLimit){
//         return "Allowed"
//     }
//     else{
//         return "Not Allowed"
//     }
        
// }

// console.log(shipping())
"use strict";

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "scissors";
  } else if (number === 1) {
    return "paper";
  } else return "rock";
}

const rock = document.querySelector(".rock-button");
const paper = document.querySelector(".paper-button");
const scissors = document.querySelector(".scissors-button");

function getHumanChoice(humanChoice) {
  if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  }
}

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;


rock.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(getHumanChoice(humanChoice));
  console.log(getHumanChoice(computerChoice));
  console.log(humanScore);
  console.log(computerScore);
});
paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(getHumanChoice(humanChoice));
  console.log(getHumanChoice(computerChoice));
  console.log(humanScore);
  console.log(computerScore);
});
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(getHumanChoice(humanChoice));
  console.log(getHumanChoice(computerChoice));
  console.log(humanScore);
  console.log(computerScore);
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie!");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log("You win!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    humanScore +=  1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore +=  1;
    console.log("You win!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    console.log("You lose!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    console.log("You lose!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    console.log("You lose!");
  }
  
  if (humanScore === 5 && computerScore < 5) {
    alert("YOU WON THE GAME!");
    // console.log("YOU WON THE GAME!")
  } else if (computerScore === 5 && humanScore < 5) {
    alert("YOU LOSE THE GAME!");
    // console.log("YOU LOSE THE GAME!")
  }
}
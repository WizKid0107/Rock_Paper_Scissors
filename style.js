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
const reset = document.querySelector(".reset-button");
const popUP = document.querySelector(".pop-up");


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
});
paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "paper") {
    document.querySelector(".results").textContent = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    document.querySelector(".results").textContent = "It's a tie!";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    document.querySelector(".results").textContent = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    document.querySelector(".results").textContent = "You win!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    document.querySelector(".results").textContent = "You win!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    document.querySelector(".results").textContent = "You win!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    document.querySelector(".results").textContent = "You lose!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    document.querySelector(".results").textContent = "You lose!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    document.querySelector(".results").textContent = "You lose!";
  }

  document.querySelector(".human-score").textContent = humanScore;
  document.querySelector(".computer-score").textContent = computerScore;

  if (humanScore === 5) {
    popUP.textContent = "You won!!!";
    popUP.showModal();
  } else if (computerScore === 5) {
    popUP.textContent = "You lose!!!";
    popUP.showModal();
  }
  

}

reset.addEventListener("click", () => {
  document.querySelector(".human-score").textContent = "0";
  document.querySelector(".computer-score").textContent = "0";
  document.querySelector(".results").textContent = " ";
  humanScore = 0;
  computerScore = 0;
});

popUP.addEventListener("click", () => {
  popUP.close();
});

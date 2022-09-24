// set up

const arr = ["rock", "paper", "scissors"];

// functions 

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function computerChoice(array){
    return arr[Math.floor(random(1,4))-1];
}

function round(computerSelection, playerSelection) {
    // returns
    let win = "you win!";
    let lose = "you lose!";
    let tie = "it's a tie!";

    // it's a tie
    if (computerSelection === playerSelection) {
        return tie;
    }

    // losing options
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return lose;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return lose;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return lose;
    }

    // winning options
    if (computerSelection === "rock" && playerSelection === "paper") {
        return win;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return win;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return win;
    }
}

// program
let computerSelection = computerChoice(arr);

console.log("computer: " + computerSelection);

let playerSelection =  prompt("enter rock, paper or scissors:");

// validate player selection
if (playerSelection != "rock" || playerSelection != "paper" | playerSelection != "scissors") {
    console.log("invalid input!")
    playerSelection =  prompt("enter rock, paper or scissors:");
}
console.log("player: " + playerSelection);
console.log(round(computerSelection, playerSelection));




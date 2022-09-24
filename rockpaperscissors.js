const arr = ["rock", "paper", "scissors"];

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function computerChoice(array){
    return arr[Math.floor(random(1,4))-1];
}

// console.log(computerChoice(arr));

let playerSelection =  prompt("enter rock, paper or scissors:");

// validate player selection
if (playerSelection != "rock" || playerSelection != "paper" | playerSelection != "scissors") {
    console.log("invalid input!")
    playerSelection =  prompt("enter rock, paper or scissors:");
}

// console.log(playerSelection);

let computerSelection = computerChoice(arr);

function round(computerSelection, playerSelection) {
    

}
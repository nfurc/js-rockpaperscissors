// set up

const arr = ["rock", "paper", "scissors"];
let score = 0;

// functions 

function computerChoice(array){
    return arr[Math.floor(Math.random() * arr.length)];
}

function round(computerSelection, playerSelection) {
    // returns
    let win = "you win!";
    let lose = "you lose!";
    let tie = "it's a tie!";

    // messages
    let youLose = computerSelection + " wins over " + playerSelection;
    let youWin = playerSelection + " wins over " + computerSelection;

    // it's a tie
    if (computerSelection === playerSelection) {
        return tie;
    }

    // losing
    if ((computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
            console.log(youLose);
            score--;
            return lose;
        }

    // winning
    if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")) {
            console.log(youWin);
            score++;
            return win;
        }
}

// program

// game loop 
while (score < 5)
    {
        // intro
        console.log("Play until you score 5 points! If you lose, you lose a point!");
        console.log("Score: " + score);

        // computer turn 
        let computerSelection = computerChoice(arr);
        // cheats!
        // console.log("computer: " + computerSelection);

        // player turn
        let playerSelection =  prompt("enter rock, paper or scissors:").toLowerCase();

        // check if input is valid before proceeding

        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === "scissors") {
            console.log("player: " + playerSelection);
            console.log(round(computerSelection, playerSelection));
            console.log(score);
        } else {
            console.log(playerSelection);
            console.log("invalid input");
        }
    }

// game over
if (score == 5) {
    console.log("Congratulations, you win the game!");
}

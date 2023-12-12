function getComputerChoice() {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomChoice = Math.floor(Math.random()*choices.length);
    // console.log(choices[randomChoice]);
    return choices[randomChoice];
}

// let computerSelection = getComputerChoice();
// console.log(computerSelection);

function getPlayerChoice() {
    let playerSelection = prompt("Choose rock, paper, or scissors: ");
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection[0].toUpperCase()+playerSelection.substring(1, playerSelection.length).toLowerCase();
    return playerSelection;
}

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("Paper covers rock. Computer wins.");
        return computerPoints = computerPoints + 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Rock smashes scissors. You win!");
        return playerPoints = playerPoints + 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Paper covers rock. You win!");
        return playerPoints = playerPoints + 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Scissors cut paper. Computer wins.");
        return computerPoints = computerPoints + 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Rock smashes scissors. Computer wins.");
        return computerPoints = computerPoints + 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Scissors cut paper. You win!");
        return playerPoints = playerPoints + 1;
    } else {
        console.log("it's a tie. keep playing");
    }
}

function game() {
    while (playerPoints < 3 && computerPoints < 3) {
        playRound();
        if (playerPoints === 3) {
            console.log("You win the game!");
        } else if (computerPoints === 3) {
            console.log("computer wins the game :/");
        } 
    }
}

game();

console.log(playerPoints);
console.log(computerPoints);







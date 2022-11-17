function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getComputerChoice() {
    let roll = Math.floor(getRandomNum(1, 4));
    let choice = `none`;

    if (roll == 1) {
        choice = `rock`;
    } else if (roll == 2) {
        choice = `paper`;
    } else {
        choice = `scissors`;
    }
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let winner = " ";
    let win = " ";
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        let winner = "noone"
        
    } else if (playerChoice == "rock" && computerSelection == "paper") {
        let winner = "computer";
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        let winner = "player";
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
        let winner = "computer";
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        let winner = "player";
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        let winner = "computer";
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        let winner = "player";
    } else { 
        let winner = "noone";
    }
    console.log(playerChoice);
    console.log(computerSelection);

    if (winner === "noone") {
        let win = `you both picked ${playerChoice}!, noone wins.`;
    } else if(winner === "computer") {
         let win = `You Lose! ${computerSelection} beats ${playerChoice}`;
    } else {
        let win = `You win! ${playerChoice} beats ${computerSelection}`
    }

    return win;
}
let computerSelection = getComputerChoice();
let playerSelection = "rock"; 
playRound(playerSelection, computerSelection);

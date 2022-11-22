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

let winRound = "";

function playRound(playerSelection, computerSelection) {
    let winner = " ";
    let win = " ";
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        winner = "noone"
        
    } else if (playerChoice == "rock" && computerSelection == "paper") {
        winner = "computer";
        winRound = "computer";
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        winner = "player";
        winRound = "player";
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
        winner = "computer";
        winRound = "computer";
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        winner = "player";
        winRound = "player";
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        winner = "computer";
        winRound = "computer";
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        winner = "player";
        winRound = "player";
    } else { 
        winner = "noone";
        winRound = "noone";
    }

    if (winner == "noone") {
        win = `you both picked ${playerChoice}!, noone wins.`;
    } else if(winner == "computer") {
        win = `You Lose! ${computerSelection} beats ${playerChoice}`;
    } else {
        win = `You win! ${playerChoice} beats ${computerSelection}`
    }

}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const para = document.createElement('p');
let gameLength = 0;
let playerPoints = 0;
let computerPoints = 0;

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        if(gameLength === 0){
            para.textContent = "";
        }
        
        if (winRound === "player") {
            playerPoints++;
        } else if (winRound === "computer") {
            computerPoints++;
        }

        gameLength++;
        if(gameLength === 5){
            roundEnd(playerPoints, computerPoints);
        } 
        console.log(gameLength);     
    });    
});

function roundEnd (playerPoints, computerPoints) {
    if (playerPoints > computerPoints){
        // const para = document.createElement('p');
        para.textContent = `Congrats you won! ${playerPoints} to ${computerPoints}`;
        result.appendChild(para);
    } else if (playerPoints < computerPoints) {
        // const para = document.createElement('p');
        para.textContent = `Unlucky, the computer won ${computerPoints} to ${playerPoints}.`;
        result.appendChild(para);
    }

    gameLength = 0;
}
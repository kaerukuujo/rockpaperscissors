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
        winner = "noone"
        
    } else if (playerChoice == "rock" && computerSelection == "paper") {
        winner = "computer";
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        winner = "player";
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
        winner = "computer";
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        winner = "player";
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        winner = "computer";
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        winner = "player";
    } else { 
        winner = "noone";
    }

    if (winner == "noone") {
        win = `you both picked ${playerChoice}!, noone wins.`;
    } else if(winner == "computer") {
        win = `You Lose! ${computerSelection} beats ${playerChoice}`;
    } else {
        win = `You win! ${playerChoice} beats ${computerSelection}`
    }

    console.log(win);
}
const container = document.querySelector('#container');

const btn1 = document.createElement('button');
btn1.textContent = "Rock";
btn1.style.borderStyle = "solid";
btn1.style.borderColor = "black";
btn1.style.backgroundColor = "light blue";
btn1.classList.add('btn');
container.appendChild(btn1);

const btn2 = document.createElement('button');
btn1.textContent = "Paper";
btn2.style.borderStyle = "solid";
btn2.style.borderColor = "black";
btn2.style.backgroundColor = "light blue";
btn2.classList.add('btn');
container.appendChild(btn2);

const btn3 = document.createElement('button');
btn1.textContent = "cissors";
btn3.style.borderStyle = "solid";
btn2.style.borderColor = "black";
btn3.style.backgroundColor = "light blue";
btn3.classList.add('btn');
container.appendChild(btn3);

// function game() {
//     for(let i = 0; i < 5; i++ ){
//         playRound(prompt("Enter rock paper or scissors"), getComputerChoice());
//     }
// }


game();

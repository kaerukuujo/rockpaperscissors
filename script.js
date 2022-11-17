function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getComputerChoice() {
    let roll = Math.floor(getRandomNum(1, 4));
    let choice = 'Paper';
    console.log(roll);

    if (roll === 1) {
        console.log("Paper");
    } else if (roll === 2) {
        console.log("Scissors");
    } else {
        console.log("Rock");
    }
}

getComputerChoice();
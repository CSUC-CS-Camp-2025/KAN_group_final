
//Game Variables
const numDice = 5;
const dice = [];
let roundNumber = 1;

//DOM elements
const btn = document.getElementById('rollButton');

// Generates a random integer between 1 and 6
function randomizeDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    for (let i = 0; i < numDice; i++) {
        dice.push(randomizeDie());
    }
    roundNumber++;
}

function getDice() {
    return dice;
}

function drawDice(dice) {

}

btn.addEventListener('click', () => {
    rollDice();
    console.log(getDice());
});
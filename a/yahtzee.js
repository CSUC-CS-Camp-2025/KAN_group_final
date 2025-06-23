
//Game Variables
const numDice = 5;
const dice = [];
let roundNumber = 1;

//DOM elements
const btn = document.getElementById('rollButton');
const diceOnBoard = document.getElementsByClassName('die-place');

// Generates a random integer between 1 and 6
function randomizeDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//randomizes all dice and populates dice[]
function rollDice() {
    for (let i = 0; i < numDice; i++) {
        dice.push(randomizeDie());
    }
    roundNumber++;
}

//returns dice[]
function getDice() {
    return dice;
}

//draws dice by reading the dice[] and setting backgroundImages using the diceOnBoard[]
function drawDice(dice) {
    for (let i = 0; i<diceOnBoard.length; i++) {
        if (getDice().at(i) == 1) {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/one.png)';  
        }
        else if (getDice().at(i) == 2) {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/two.png)';  
        }
        else if (getDice().at(i) == 3) {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/three.png)';  
        }
        else if (getDice().at(i) == 4) {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/four.png)';  
        }
        else if (getDice().at(i) == 5) {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/five.png)';  
        }
        else {
        diceOnBoard.item(i).style.backgroundImage = 'url(images/six.png)';  
        }
    }
}

//pops all elements in dice[]
function clearDice() {
    for (let i = 0; i < numDice; i++) {
        dice.pop();
    }
}

btn.addEventListener('click', () => {
    rollDice();
    console.log(getDice());
    drawDice();
    clearDice();
});


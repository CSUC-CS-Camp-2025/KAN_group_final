
//Game Variables
const numDice = 5;
let dice = [];
let roundNumber = 1;

//DOM elements
const btn = document.getElementById('rollButton');
diceOnBoard = document.getElementsByClassName('dieOnBoard');
const boardOne = document.getElementById('boardOne');
const boardTwo = document.getElementById('boardTwo');
const boardThree = document.getElementById('boardThree');
const boardFour = document.getElementById('boardFour');
const boardFive = document.getElementById('boardFive');
const selectedDiceContainer = document.getElementById('selected-dice');

// Generates a random integer between 1 and 6
function randomizeDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//randomizes all dice and populates dice[]
function rollDice() {
    clearDice();
    for (let i = 0; i < diceOnBoard.length; i++) {
        dice.push(randomizeDie());
    }
    roundNumber++;
}

//returns dice[]
function getDice() {
    return dice;
}

//draws dice by reading the dice[] and setting backgroundImages using the diceOnBoard[]
function drawDice() {
    for (let i = 0; i < diceOnBoard.length; i++) {
        if (getDice().at(i) == 1) {
            diceOnBoard.item(i).setAttribute('value', 'one');
        }
        else if (getDice().at(i) == 2) {
            diceOnBoard.item(i).setAttribute('value', 'two');
        }
        else if (getDice().at(i) == 3) {
            diceOnBoard.item(i).setAttribute('value', 'three');
        }
        else if (getDice().at(i) == 4) {
            diceOnBoard.item(i).setAttribute('value', 'four');
        }
        else if (getDice().at(i) == 5) {
            diceOnBoard.item(i).setAttribute('value', 'five');
        }
        else {
            diceOnBoard.item(i).setAttribute('value', 'six');
        }
    }
}

btn.addEventListener('click', () => {
    diceOnBoard = document.getElementsByClassName('dieOnBoard');
    dice = [];
    rollDice();
    drawDice();
    setBoardELs();
    console.log(dice);
});

//sets Event Listeners for dice on board
function setBoardELs() {
    boardOne.addEventListener('click', () => {
        let element = document.createElement('div'); //init new div
        element.setAttribute('class', 'selectedDie'); //sets class to selected dice
        element.setAttribute('id', 'selectedOne');
        element.setAttribute('value', boardOne.getAttribute('value'));
        selectedDiceContainer.append(element);
        boardOne.remove();
    });
    boardTwo.addEventListener('click', () => {
        let element = document.createElement('div');
    element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedTwo');
        element.setAttribute('value', boardTwo.getAttribute('value'));
        selectedDiceContainer.append(element);
        boardTwo.remove();
    });
    boardThree.addEventListener('click', () => {
        let element = document.createElement('div');
    element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedThree');
        element.setAttribute('value', boardThree.getAttribute('value'));
        selectedDiceContainer.append(element);
        boardThree.remove();
    });
    boardFour.addEventListener('click', () => {
        let element = document.createElement('div');
    element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedFour');
        element.setAttribute('value', boardFour.getAttribute('value'));
        selectedDiceContainer.append(element);
        boardFour.remove();
    });
    boardFive.addEventListener('click', () => {
        let element = document.createElement('div');
    element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedFive');
        element.setAttribute('value', boardFive.getAttribute('value'));
        selectedDiceContainer.append(element);
        boardFive.remove();
    });
}

function clearDice() {
}

//Game Variables
const numDice = 5;
let dice = [];
let roundNumber = 0;

//DOM elements
const btn = document.getElementById('rollButton');
diceOnBoard = document.getElementsByClassName('dieOnBoard');
selectedDice = document.getElementsByClassName('selectedDie');
const boardDiceContainer = document.getElementById('dice-area');
selectedDiceContainer = document.getElementById('selected-dice');
//Individual Dice
boardOne = document.getElementById('boardOne');
boardTwo = document.getElementById('boardTwo');
boardThree = document.getElementById('boardThree');
boardFour = document.getElementById('boardFour');
boardFive = document.getElementById('boardFive');
selectedOne = document.getElementById('selectedOne');
selectedTwo = document.getElementById('selectedTwo');
selectedThree = document.getElementById('selectedThree');
selectedFour = document.getElementById('selectedFour');
selectedFive = document.getElementById('selectedFive');


btn.addEventListener('click', () => {
    if (roundNumber >= 3) {
        clearGame();
        reInitBoardDice();
        roundNumber = 0;
    }
    diceOnBoard = document.getElementsByClassName('dieOnBoard'); //re-init the diceOnBoard
    dice = []; //clears dice before rolling
    if (roundNumber == 0) {
        console.log('this method ran');
        setELs();
    }
    rollDice();
    drawDice();
});

// Generates a random integer between 1 and 6
function randomizeDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//randomizes all dice and populates dice[]
function rollDice() {
    for (let i = 0; i < diceOnBoard.length; i++) {
        dice.push(randomizeDie());
    }
    roundNumber++;
}

//returns dice[]
function getDice() {
    return dice;
}

function reInitBoardDice() {
    for (let i = 1; i <= numDice; i++) {
        let element = document.createElement('div');
        setAttributes(element, { 'class': 'dieOnBoard', 'id': 'board' + numToString(i) });
        boardDiceContainer.append(element);
    }
}

// converts a number to the equivalent string with the 1st letter capitalized
function numToString(num) {
    switch (num) {
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
    }
}

//draws dice by reading the dice[] and setting backgroundImages using the diceOnBoard[]
function drawDice() {
    //this don't work because it iterates through the loop too many times, based on DiceOnBoard
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

function setAttributes(element, attributes) {
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//sets Event Listeners for dice on board
function setELs() {
    //re inits all board Dice
    boardOne = document.getElementById('boardOne');
    boardTwo = document.getElementById('boardTwo');
    boardThree = document.getElementById('boardThree');
    boardFour = document.getElementById('boardFour');
    boardFive = document.getElementById('boardFive');

    boardOne.addEventListener('click', () => {
        let element = document.createElement('div'); //init new div
        setAttributes(element, { 'class': 'selectedDie', 'id': 'selectedOne', 'value': boardOne.getAttribute('value') }); //adds all neccesary selected dice attributes
        selectedDiceContainer.append(element); //adds new element to the selected dice
        selectedOne = document.getElementById('selectedOne'); //re-init selectedOne element

        selectedOne.addEventListener('click', () => {
            let element = document.createElement('div'); //init new div
            setAttributes(element, { 'class': 'dieOnBoard', 'id': 'boardOne', 'value': selectedOne.getAttribute('value') }); //adds all neccesary board dice attributes
            boardDiceContainer.append(element);
            boardOne = document.getElementById('boardOne');
            selectedOne.remove();
        });
        boardOne.remove(); //removes original die
    });
    boardTwo.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, { 'class': 'selectedDie', 'id': 'selectedTwo', 'value': boardTwo.getAttribute('value') });
        selectedDiceContainer.append(element);
        selectedTwo = document.getElementById('selectedTwo');

        selectedTwo.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, { 'class': 'dieOnBoard', 'id': 'boardTwo', 'value': selectedTwo.getAttribute('value') });
            boardDiceContainer.append(element);
            boardTwo = document.getElementById('boardTwo');
            selectedTwo.remove();
        });
        boardTwo.remove();
    });
    boardThree.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, { 'class': 'selectedDie', 'id': 'selectedThree', 'value': boardThree.getAttribute('value') });
        selectedDiceContainer.append(element);
        selectedThree = document.getElementById('selectedThree');

        selectedThree.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, { 'class': 'dieOnBoard', 'id': 'boardThree', 'value': selectedThree.getAttribute('value') });
            boardDiceContainer.append(element);
            boardThree = document.getElementById('boardThree');
            selectedThree.remove();
        });
        boardThree.remove();
    });
    boardFour.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, { 'class': 'selectedDie', 'id': 'selectedFour', 'value': boardFour.getAttribute('value') });
        selectedDiceContainer.append(element);
        selectedFour = document.getElementById('selectedFour');

        selectedFour.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, { 'class': 'dieOnBoard', 'id': 'boardFour', 'value': selectedFour.getAttribute('value') });
            boardDiceContainer.append(element);
            boardFour = document.getElementById('boardFour');
            selectedFour.remove();
        });
        boardFour.remove();
    });
    boardFive.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, { 'class': 'selectedDie', 'id': 'selectedFive', 'value': boardFive.getAttribute('value') });
        selectedDiceContainer.append(element);
        selectedFive = document.getElementById('selectedFive');

        selectedFive.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, { 'class': 'dieOnBoard', 'id': 'boardFive', 'value': selectedFive.getAttribute('value') });
            boardDiceContainer.append(element);
            boardFive = document.getElementById('boardFive');
            selectedFive.remove();
        });
        boardFive.remove();
    });
}

function clearGame() {
    boardOne.remove();
    boardTwo.remove();
    boardThree.remove();
    boardFour.remove();
    boardFive.remove();
    if (selectedOne != null) {
        selectedOne.remove();
    }
    if (selectedTwo != null) {
        selectedTwo.remove();
    }
    if (selectedThree != null) {
        selectedThree.remove();
    }
    if (selectedFour != null) {
        selectedFour.remove();
    }
    if (selectedFive != null) {
        selectedFive.remove();
    }
}


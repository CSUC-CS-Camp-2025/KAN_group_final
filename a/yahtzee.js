
//Game Variables
const numDice = 5;
let dice = [];
let roundNumber = 0;

//DOM elements
const btn = document.getElementById('rollButton');
diceOnBoard = document.getElementsByClassName('dieOnBoard');
const boardDiceContainer = document.getElementById('dice-area');
const selectedDiceContainer = document.getElementById('selected-dice');
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

function setAttributes(element, attributes) {
  for(var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

testElement = document.createElement('p');
setAttributes(testElement, {'textColor': 'blue'});
console.log(testElement);

btn.addEventListener('click', () => {
    /* TODO: For later implementation
    if (roundNumber >= 3) {
        clearGame();
    }
    */
    diceOnBoard = document.getElementsByClassName('dieOnBoard'); //re-init the diceOnBoard
    dice = []; //clears dice before rolling
    rollDice();
    drawDice();
    setBoardELs();
    console.log(roundNumber);
});

//sets Event Listeners for dice on board
function setBoardELs() {
    boardOne.addEventListener('click', () => {
        let element = document.createElement('div'); //init new div
        setAttributes(element, {'class': 'selectedDie', 'id': 'selectedOne', 'value': boardOne.getAttribute('value')}); //adds all neccesary attribute to new element
        selectedDiceContainer.append(element); //adds new element to the selected dice
        selectedOne = document.getElementById('selectedOne'); //re-init selectedOne element
        selectedOne.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, {'class': 'dieOnBoard', 'id': 'boardOne', 'value': selectedOne.getAttribute('value')});
            boardDiceContainer.append(element);
            boardOne = document.getElementById('boardOne');
            selectedOne.remove();
        });
        boardOne.remove(); //removes original die
    });
    boardTwo.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, {'class': 'selectedDie', 'id': 'selectedTwo', 'value': boardTwo.getAttribute('value')});
        selectedDiceContainer.append(element);
        selectedTwo = document.getElementById('selectedTwo');
        selectedTwo.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, {'class': 'dieOnBoard', 'id': 'boardTwo', 'value': selectedTwo.getAttribute('value')});
            boardDiceContainer.append(element);
            boardTwo = document.getElementById('boardTwo');
            selectedTwo.remove();
        });
        boardTwo.remove();
    });
    boardThree.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, {'class': 'selectedDie', 'id': 'selectedThree', 'value': boardThree.getAttribute('value')});
        selectedDiceContainer.append(element);
        selectedThree = document.getElementById('selectedThree');
        selectedThree.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, {'class': 'dieOnBoard', 'id': 'boardThree', 'value': selectedThree.getAttribute('value')});
            boardDiceContainer.append(element);
            boardThree = document.getElementById('boardThree');
            selectedThree.remove();
        });
        boardThree.remove();
    });
    boardFour.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, {'class': 'selectedDie', 'id': 'selectedFour', 'value': boardFour.getAttribute('value')});
        selectedDiceContainer.append(element);
        selectedFour = document.getElementById('selectedFour');
        selectedFour.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, {'class': 'dieOnBoard', 'id': 'boardFour', 'value': selectedFour.getAttribute('value')});
            boardDiceContainer.append(element);
            boardFour = document.getElementById('boardFour');
            selectedFour.remove();
        });
        boardFour.remove();
    });
    boardFive.addEventListener('click', () => {
        let element = document.createElement('div');
        setAttributes(element, {'class': 'selectedDie', 'id': 'selectedFive', 'value': boardFive.getAttribute('value')});
        selectedDiceContainer.append(element);
        selectedFive = document.getElementById('selectedFive');
        selectedFive.addEventListener('click', () => {
            let element = document.createElement('div');
            setAttributes(element, {'class': 'dieOnBoard', 'id': 'boardFive', 'value': selectedFive.getAttribute('value')});
            boardDiceContainer.append(element);
            boardFive = document.getElementById('boardFive');
            selectedFive.remove();
        });
        boardFive.remove();
    });
}


/*
//sets Event Listeners for dice on board
function setBoardELs() {
    boardOne.addEventListener('click', () => {
        let element = document.createElement('div'); //init new div
        element.setAttribute('class', 'selectedDie'); //sets class to selected dice
        element.setAttribute('id', 'selectedOne'); //sets id to selected
        element.setAttribute('value', boardOne.getAttribute('value')); //gets value from die and passes it to new die
        selectedDiceContainer.append(element); //adds new element to the selected dice
        selectedOne = document.getElementById('selectedOne'); //re-init selectedOne element
        selectedOne.addEventListener('click', () => {
            let element = document.createElement('div');
            element.setAttribute('class', 'dieOnBoard');
            element.setAttribute('id', 'boardOne');
            element.setAttribute('value', selectedOne.getAttribute('value'));
            boardDiceContainer.append(element);
            boardOne = document.getElementById('boardOne');
            selectedOne.remove();
        });
        boardOne.remove(); //removes original die
    });
    boardTwo.addEventListener('click', () => {
        let element = document.createElement('div');
        element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedTwo');
        element.setAttribute('value', boardTwo.getAttribute('value'));
        selectedDiceContainer.append(element);
        selectedTwo = document.getElementById('selectedTwo');
        selectedTwo.addEventListener('click', () => {
            let element = document.createElement('div');
            element.setAttribute('class', 'dieOnBoard');
            element.setAttribute('id', 'boardTwo');
            element.setAttribute('value', selectedTwo.getAttribute('value'));
            boardDiceContainer.append(element);
            boardTwo = document.getElementById('boardTwo');
            selectedTwo.remove();
        });
        boardTwo.remove();
    });
    boardThree.addEventListener('click', () => {
        let element = document.createElement('div');
        element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedThree');
        element.setAttribute('value', boardThree.getAttribute('value'));
        selectedDiceContainer.append(element);
        selectedThree = document.getElementById('selectedThree');
        selectedThree.addEventListener('click', () => {
            let element = document.createElement('div');
            element.setAttribute('class', 'dieOnBoard');
            element.setAttribute('id', 'boardThree');
            element.setAttribute('value', selectedThree.getAttribute('value'));
            boardDiceContainer.append(element);
            boardThree = document.getElementById('boardThree');
            selectedThree.remove();
        });
        boardThree.remove();
    });
    boardFour.addEventListener('click', () => {
        let element = document.createElement('div');
        element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedFour');
        element.setAttribute('value', boardFour.getAttribute('value'));
        selectedDiceContainer.append(element);
        selectedFour = document.getElementById('selectedFour');
        selectedFour.addEventListener('click', () => {
            let element = document.createElement('div');
            element.setAttribute('class', 'dieOnBoard');
            element.setAttribute('id', 'boardFour');
            element.setAttribute('value', selectedFour.getAttribute('value'));
            boardDiceContainer.append(element);
            boardFour = document.getElementById('boardFour');
            selectedFour.remove();
        });
        boardFour.remove();
    });
    boardFive.addEventListener('click', () => {
        let element = document.createElement('div');
        element.setAttribute('class', 'selectedDie');
        element.setAttribute('id', 'selectedFive');
        element.setAttribute('value', boardFive.getAttribute('value'));
        selectedDiceContainer.append(element);
        selectedFive = document.getElementById('selectedFive');
        selectedFive.addEventListener('click', () => {
            let element = document.createElement('div');
            element.setAttribute('class', 'dieOnBoard');
            element.setAttribute('id', 'boardFive');
            element.setAttribute('value', selectedFive.getAttribute('value'));
            boardDiceContainer.append(element);
            boardFive = document.getElementById('boardFive');
            selectedFive.remove();
        });
        boardFive.remove();
    });
}
*/

/* TODO: For later implementation
function clearGame() {
    boardOne.remove();
    boardTwo.remove();
    boardThree.remove();
    boardFour.remove();
    boardFive.remove();
    if (selectedOne != null) {
    selectedOne.remove();
    }
    selectedTwo.remove();
    selectedThree.remove();
    selectedFour.remove();
    selectedFive.remove();
    console.log('this method ran');
}
*/
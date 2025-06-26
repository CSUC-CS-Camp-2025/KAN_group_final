
//Game Variables
let roundNumber = 0;
let bonus = -10; //-63

//DOM elements
selectedDice = document.getElementsByClassName('selectedDie');
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
//Score Catgeory Elements
aces = document.getElementById('aces');
twos = document.getElementById('twos');
threes = document.getElementById('threes');
fours = document.getElementById('fours');
fives = document.getElementById('fives');
sixes = document.getElementById('sixes');
bonusElement = document.getElementById('bonus');
yahtzeeElement = document.getElementById('yahtzee');
chance = document.getElementById('chance');

//updates Bonus score and sets the element contents
function updateBonus(num) {
    bonus += num;
    if (bonus >= 0) {
        bonus = 35;
        bonusElement.innerHTML = bonus;
        return;
    }
}

aces.addEventListener('click', () => {
    aces.innerHTML = checkAces();
    updateBonus(checkAces());
    roundNumber++;
});

twos.addEventListener('click', () => {
    twos.innerHTML = checkTwos();
    updateBonus(checkTwos());
    roundNumber++;
});

threes.addEventListener('click', () => {
    threes.innerHTML = checkThrees();
    updateBonus(checkThrees());
    roundNumber++;
});

fours.addEventListener('click', () => {
    fours.innerHTML = checkFours();
    updateBonus(checkFours());
    roundNumber++;
});

fives.addEventListener('click', () => {
    fives.innerHTML = checkFives();
    updateBonus(checkFives());
    roundNumber++;
});

sixes.addEventListener('click', () => {
    sixes.innerHTML = checkSixes();
    updateBonus(checkSixes());
    roundNumber++;
});

yahtzeeElement.addEventListener('click', () => {
    if (checkYahtzee()) {
        yahtzeeElement.innerHTML = 50;
    }
    roundNumber++
});

chance.addEventListener('click', () => {
    chance.innerHTML = checkChance();
    roundNumber++;
});

//checks the number of ones using the selectedDice HTMLCollection
function checkAces() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'one') {
            score += 1;
        }
    }
    return score;
}

//checks the number of twos using the selectedDice HTMLCollection
function checkTwos() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'two') {
            score += 2;
        }
    }
    return score;
}

//checks the number of threes using the selectedDice HTMLCollection
function checkThrees() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'three') {
            score += 3;
        }
    }
    return score;
}

//checks the number of fours using the selectedDice HTMLCollection
function checkFours() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'four') {
            score += 4;
        }
    }
    return score;
}

//checks the number of fives using the selectedDice HTMLCollection
function checkFives() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'five') {
            score += 5;
        }
    }
    return score;
}

//checks the number of sixes using the selectedDice HTMLCollection
function checkSixes() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        if (element.getAttribute('value') == 'six') {
            score += 6;
        }
    }
    return score;
}

// checks the chance value based on the selectedDice array using a switch statement
function checkChance() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        switch (selectedDice.item(i).getAttribute('value')) {
            case 'one':
                score += 1;
                break;
            case 'two':
                score += 2;
                break;
            case 'three':
                score += 3;
                break;
            case 'four':
                score += 4;
                break;
            case 'five':
                score += 5;
                break;
            case 'six':
                score += 6;
                break;
        }
    }
    return score;
}

function checkYahtzee() {
    selectedDice = document.getElementsByClassName('selectedDie');
    if (selectedDice.length != 5) {
        return false;
    }
    for (let i = 0; i < selectedDice.length - 1; i++) {
        value = selectedDice.item(i).getAttribute('value');
        valueNext = selectedDice.item(i+1).getAttribute('value');
        if (value != valueNext) {
            return false;
        }
    }
    return true;
}

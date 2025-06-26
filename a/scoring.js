
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
smStraightElement = document.getElementById('smStraight');
lrgSraightElement = document.getElementById('lrgStraight');
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

smStraightElement.addEventListener('click', () => {
    if (checkSmStraight()) {
        smStraightElement.innerHTML = 30;
    }
    roundNumber++;
});

lrgSraightElement.addEventListener('click', () => {
    if (checkLrgStraight()) {
        lrgSraightElement.innerHTML = 40;
    }
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

// checks for Yahtzee by iterating through selectedDice and comparing value with nextValue
function checkYahtzee() {
    selectedDice = document.getElementsByClassName('selectedDie');
    if (selectedDice.length != 5) {
        return false;
    } //returns false if there's not 5 dice
    for (let i = 0; i < selectedDice.length - 1; i++) {
        value = selectedDice.item(i).getAttribute('value'); //current die value
        valueNext = selectedDice.item(i + 1).getAttribute('value'); //next die value
        if (value != valueNext) {
            return false;
        } //returns false if current value isnt the same as the next
    }
    return true;
}

// converts a number to the equivalent string with the 1st letter capitalized
function stringToNum(string) {
    switch (string) {
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
    }
}

// checks for large straight by populating a dice[] with values, then checking for cases
function checkLrgStraight() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    if (dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) {
        return true;
    } // returns true if dice has 1, 2, 3, 4, 5
    else if (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6)) {
        return true;
    } // returns true if dice has 2, 3, 4, 5, 6
    else {
        return false;
    }
    
}

// checks for small straight by populating a dice[] with values, then checking for cases
function checkSmStraight() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    if (dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4)) {
        return true;
    } // returns true if dice has 1, 2, 3, 4
    else if (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) {
        return true;
    } // returns true if dice has 2, 3, 4, 5
    else if (dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6)) {
        return true;
    } // returns true if dice has 3, 4, 5, 6
    else {
        return false;
    }
    
}

/*
function checkLrgStraight() {
    selectedDice = document.getElementsByClassName('selectedDie');
    switch (selectedDice.item(i).getAttribute('value')) {
        case 'one':
            for (let i = 0; i < selectedDice.length - 1; i++) {
                value = selectedDice.item(i).getAttribute('value');
                nextValue = selectedDice.item(i + 1).getAttribute('value');
                if (stringToNum(value) != (1 + stringToNum(valueNext))) {
                    return false;
                }
            }
            return true;
            break;
        case 'two':
            for (let i = 0; i < selectedDice.length - 1; i++) {
                value = selectedDice.item(i).getAttribute('value');
                nextValue = selectedDice.item(i + 1).getAttribute('value');
                if (stringToNum(value) != (1 + stringToNum(valueNext))) {
                    return false;
                }
            }
            return true;
            break;
    }
} 
    */
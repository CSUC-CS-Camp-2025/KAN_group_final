/* FILE DESCRIPTION
    scoring.js handles the scoring of the game and mostly provides functions
    that check dice values and sets the score accordingly. It also keeps track
    of the roundNumber and ends the game accordingly
*/

//Game Variables
let roundNumber = 0;
let bonus = -63;
let clicked = false;

//DOM elements
selectedDice = document.getElementsByClassName('selectedDie');
//Score Catgeory Elements
aces = document.getElementById('aces');
twos = document.getElementById('twos');
threes = document.getElementById('threes');
fours = document.getElementById('fours');
fives = document.getElementById('fives');
sixes = document.getElementById('sixes');
bonusElement = document.getElementById('bonus');
threeKindElement = document.getElementById('3Kind');
fourKindElement = document.getElementById('4Kind');
fullHouseElement = document.getElementById('fullHouse');
smStraightElement = document.getElementById('smStraight');
lrgSraightElement = document.getElementById('lrgStraight');
yahtzeeElement = document.getElementById('yahtzee');
chance = document.getElementById('chance');
// Total Score Box
totalScoreElement = document.getElementById('totalScore');
roundDisplay = document.getElementById('round-display');

//updates Bonus score and sets the element contents
function updateBonus(num) {
    bonus += num;
    if (bonus >= 0) {
        bonus = 35;
        bonusElement.innerHTML = bonus;
        return; //sets bonus equal to 35 then returns if you reach >= 0
    }
    bonusElement.innerHTML = bonus;
}

aces.addEventListener('click', () => {
    if (!clicked) {
        aces.innerHTML = checkAces();
        updateBonus(checkAces());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

twos.addEventListener('click', () => {
    if (!clicked) {
        twos.innerHTML = checkTwos();
        updateBonus(checkTwos());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

threes.addEventListener('click', () => {
    if (!clicked) {
        threes.innerHTML = checkThrees();
        updateBonus(checkThrees());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

fours.addEventListener('click', () => {
    if (!clicked) {
        fours.innerHTML = checkFours();
        updateBonus(checkFours());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

fives.addEventListener('click', () => {
    if (!clicked) {
        fives.innerHTML = checkFives();
        updateBonus(checkFives());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

sixes.addEventListener('click', () => {
    if (!clicked) {
        sixes.innerHTML = checkSixes();
        updateBonus(checkSixes());
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

threeKindElement.addEventListener('click', () => {
    if (!clicked) {
        threeKindElement.innerHTML = get3kindScore();
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

fourKindElement.addEventListener('click', () => {
    if (!clicked) {
        fourKindElement.innerHTML = get4kindScore();
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

fullHouseElement.addEventListener('click', () => {
    if (!clicked) {
        if (checkFullHouse()) {
            fullHouseElement.innerHTML = 25;
        }
        else {
            fullHouseElement.innerHTML = 0;
        }
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

smStraightElement.addEventListener('click', () => {
    if (!clicked) {
        if (checkSmStraight()) {
            smStraightElement.innerHTML = 30;
        }
        else {
            smStraightElement.innerHTML = 0;
        }
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

lrgSraightElement.addEventListener('click', () => {
    if (!clicked) {
        if (checkLrgStraight()) {
            lrgSraightElement.innerHTML = 40;
        }
        else {
            lrgSraightElement.innerHTML = 0;
        }
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

yahtzeeElement.addEventListener('click', () => {
    if (!clicked) {
        if (checkYahtzee()) {
            yahtzeeElement.innerHTML = 50;
        }
        else {
            yahtzeeElement.innerHTML = 0;
        }
        roundNumber++
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
});

chance.addEventListener('click', () => {
    if (!clicked) {
        chance.innerHTML = checkChance();
        roundNumber++;
        updateRoundDisplay();
        checkGameOver();
        clicked = true;
    }
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

function checkLrgStraight() {
    selectedDice = document.getElementsByClassName('selectedDie');
    const diceSet = new Set();

    for (let i = 0; i < selectedDice.length; i++) {
        let val = selectedDice.item(i).getAttribute('value');
        let num = stringToNum(val);
        if (num) diceSet.add(num);
    }

    const sortedUnique = [...diceSet].sort((a, b) => a - b);

    // A large straight requires exactly 5 unique, consecutive numbers
    if (sortedUnique.length < 5) return false;

    for (let i = 0; i <= sortedUnique.length - 5; i++) {
        let isStraight = true;
        for (let j = 1; j < 5; j++) {
            if (sortedUnique[i + j] !== sortedUnique[i] + j) {
                isStraight = false;
                break;
            }
        }
        if (isStraight) return true;
    }

    return false;
}


function checkSmStraight() {
    selectedDice = document.getElementsByClassName('selectedDie');
    const diceSet = new Set();

    for (let i = 0; i < selectedDice.length; i++) {
        let val = selectedDice.item(i).getAttribute('value');
        let num = stringToNum(val);
        if (num) diceSet.add(num); //if num != null then adds it to diceSet()
    }

    const sortedUnique = [...diceSet].sort((a, b) => a - b); //sorts the diceSet
    let consecutive = 0;

    for (let i = 0; i < sortedUnique.length; i++) {
        if (i > 0 && sortedUnique[i] === sortedUnique[i - 1] + 1) {
            consecutive++;
            if (consecutive >= 3) return true; // found 4 in a row
        } else {
            consecutive = 0;
        }
    }

    return false;
}


//returns 3 of a kind score
function get3kindScore() {
    let score = 0;
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    if (has3ofaKind()) {
        for (let i = 0; i < dice.length; i++) {
            score += dice[i];
        }
    }
    return score;
}

//checks if there is a 3 of a kind using dice[]
function has3ofaKind() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    counts = {};
    for (let num of dice) {
        counts[num] = (counts[num] || 0) + 1;
    }
    // Check for exactly 3 occurrences
    for (let num in counts) {
        if (counts[num] === 3) {
            return true;
        } // returns true when there are 3 of the same number in dice[]
        else {
            return false;
        }
    }
}

function get4kindScore() {
    let score = 0;
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    if (has4ofaKind()) {
        for (let i = 0; i < dice.length; i++) {
            score += dice[i];
        }
    }
    return score;
}

function has4ofaKind() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }
    counts = {};
    for (let num of dice) {
        counts[num] = (counts[num] || 0) + 1;
    }
    // Check for exactly 4 occurrences
    for (let num in counts) {
        if (counts[num] === 4) {
            return true;
        } // returns true when there are 4 of the same number in dice[]
        else {
            return false;
        }
    }
}

//checks for a full house and returns a bool
function checkFullHouse() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let dice = [];
    if (selectedDice.length !== 5) {
        return false;
    } //returns false if there's not 5 dice
    for (let i = 0; i < selectedDice.length; i++) {
        dice.push(stringToNum(selectedDice.item(i).getAttribute('value')));
    }

    let counts = {};
    for (let num of dice) {
        counts[num] = (counts[num] || 0) + 1;
    }
    let hasThree = false;
    let hasTwo = false;
    for (let count of Object.values(counts)) {
        if (count === 3) hasThree = true;
        if (count === 2) hasTwo = true;
    }
    return hasThree && hasTwo; //returns true if dice[] has 3 of the same number and 2 of another number
}

function updateRoundDisplay() {
    roundDisplay.innerHTML = 'Round: ' + roundNumber + '/13';
    if (roundNumber == 1) {
        roundDisplay.setAttribute('value', 'visible');
    }
    if (roundNumber == 13) {
        roundDisplay.innerHTML = 'Game Over!';
    }
}

function calculateScore() {
    let score = 0;
    score += Number(aces.innerHTML);
    score += Number(twos.innerHTML);
    score += Number(threes.innerHTML);
    score += Number(fours.innerHTML);
    score += Number(fives.innerHTML);
    score += Number(sixes.innerHTML);
    if (Number(bonusElement.innerHTML) > 0) {
        score += Number(bonusElement.innerHTML);
    } // assures if bonus is negative it doesn't add to your score
    score += Number(threeKindElement.innerHTML);
    score += Number(fourKindElement.innerHTML);
    score += Number(fullHouseElement.innerHTML);
    score += Number(smStraightElement.innerHTML);
    score += Number(lrgSraightElement.innerHTML);
    score += Number(yahtzeeElement.innerHTML);
    score += Number(chance.innerHTML);
    return score;
}

function checkGameOver() {
    if (roundNumber == 13) {
        totalScoreElement.innerHTML = calculateScore();
    }
}
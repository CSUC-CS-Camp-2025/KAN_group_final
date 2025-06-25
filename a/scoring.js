
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

aces.addEventListener('click', () => {
    aces.innerHTML = checkAces();
});

twos.addEventListener('click', () => {
    twos.innerHTML = checkTwos();
});

threes.addEventListener('click', () => {
    threes.innerHTML = checkThrees();
});

fours.addEventListener('click', () => {
    fours.innerHTML = checkFours();
});

fives.addEventListener('click', () => {
    fives.innerHTML = checkFives();
});

sixes.addEventListener('click', () => {
    sixes.innerHTML = checkSixes();
});

function checkAces() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'one') {
            score += 1;
        }
    }
    return score;
}

function checkTwos() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'two') {
            score += 2;
        }
    }
    return score;
}

function checkThrees() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'three') {
            score += 3;
        }
    }
    return score;
}

function checkFours() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'four') {
            score += 4;
        }
    }
    return score;
}

function checkFives() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'five') {
            score += 5;
        }
    }
    return score;
}

function checkSixes() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < selectedDice.length; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'six') {
            score += 6;
        }
    }
    return score;
}

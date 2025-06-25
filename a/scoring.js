
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

aces.addEventListener('click', () => {
    aces.innerHTML = checkAces();
});

function checkAces() {
    selectedDice = document.getElementsByClassName('selectedDie');
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let element = selectedDice.item(i);
        console.log(element);
        if (element.getAttribute('value') == 'one') {
            score += 1;
        }
    }
    return score;
}


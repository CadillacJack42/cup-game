// import functions and grab DOM elements
// Cups
const cup1 = document.getElementById('cup1');
const cup2 = document.getElementById('cup2');
const cup3 = document.getElementById('cup3');

// Buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Outputs
const wins = document.getElementById('correct-guess');
const losses = document.getElementById('incorrect-guess');
const totals = document.getElementById('total-guess');

// initialize global state
let win = 0;
let total = 0;
const cups = [cup1, cup2, cup3];
const buttons = [btn1, btn2, btn3];
// set event listeners 
btn1.addEventListener('click', () => {
    handleClick(cups[0], cups);
});
btn2.addEventListener('click', () => {
    handleClick(cups[1], cups);
});
btn3.addEventListener('click', () => {
    handleClick(cups[2], cups);
});
  

const handleClick = (btn, cupArr) => {
    total++;
    let randomEl = random(cupArr);
    if (btn === randomEl) {
        win++;
    }
    randomEl.src = './assets/correct-cup.png';
    displayState();
    setTimeout(() => {
        resetImg();
    }, 1000);
    
};

const random = (arr) => {
    let num = Math.floor(Math.random() * arr.length);
    let correctCup = arr[num];
    return correctCup;
};

const resetImg = () => {
    cup1.src = './assets/cup.png';
    cup2.src = './assets/cup.png';
    cup3.src = './assets/cup.png';
};

const displayState = () => {
    wins.textContent = win;
    losses.textContent = total - win;
    totals.textContent = total;
};
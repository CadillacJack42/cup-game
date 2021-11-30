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
// set event listeners 
btn1.addEventListener('click', () => {
  console.log('btn1');
});
btn2.addEventListener('click', () => {
  console.log('btn2');
});
btn3.addEventListener('click', () => {
  console.log('btn3');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

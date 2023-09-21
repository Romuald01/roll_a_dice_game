'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score = document.getElementById('score');
const diceEl = document.querySelector('.dice-img');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

current0El.textContent = 0;
// roll dice button functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `images/dice-${dice}.png`;

  diceEl.classList.remove('hidden');

  //check if dice rolled is equal 1, if it is true switch user.
  if (dice !== 1) {
    //switch activePlayer  (if active player === 0then ative player should be 1 or active player should be zero)
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    //add dice rolled to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('.score');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice-img');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, activePlayer, playing, scores;
//initialization function: to reset the game back to normal(fresh game)
const init = function () {
  currentScore = 0;
  diceEl.classList.add('hidden');
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  //switch activePlayer  (if active player === 0then ative player should be 1 or active player should be zero)
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switch player
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
init();
// roll dice button functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `images/dice-${dice}.png`;

    diceEl.classList.remove('hidden');

    //check if dice rolled is equal 1, if it is true switch user.
    if (dice !== 1) {
      //add dice rolled to current score
      currentScore = currentScore + dice;
      //Display new score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player function
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //logic to check winner between active player
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);

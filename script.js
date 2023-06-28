'use strict';
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let scorePlayer0 = document.getElementById('score--0');
let scorePlayer1 = document.getElementById('score--1');
let diceImg = document.querySelector('.dice');
let rollBtn = document.querySelector('.btn--roll');
let currentPlayer0 = document.getElementById('current--0');
let currentPlayer1 = document.getElementById('current--1');
let holdBtn = document.querySelector('.btn--hold');
let newGameBtn = document.querySelector('.btn--new');

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceImg.classList.add('hide');

let scores;
let currentScore;
let activePlayer;
let playing;

const beggingOfGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //set all scores to 0

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  //make the starting player is the player 1
  diceImg.classList.add('hide');
};
beggingOfGame();

const switchPlayer = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  console.log('the number is one');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    //generate random dice number
    let dice = Math.trunc(Math.random() * 6) + 1;

    //display the dice roll
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove('hide');
    //if the dice number is not one add the number to the current box and display the new number
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore);
    } else {
      //if the dice number equal one switch player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    //add current score to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      ///end the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', beggingOfGame);

'use strict';

let randomNum = 10;
let score = 20;
console.log(randomNum);
const wrongSoundEeffect = new Audio('sounds/wrong.mp3');
const rightSoundEffect = new Audio('sounds/right.mp3');
let highestScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const backGroundColorEffect = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const checkButtonEnableDisable = function (boo) {
  document.querySelector('.check').disabled = boo;
};

const displayAnswer = function (answer) {
  document.querySelector('.number').textContent = answer;
};

const displayUserGuess = function (input) {
  document.querySelector('.guess').value = input;
};

const getUserGuess = function () {
  const value = document.querySelector('.guess').value;
  return value === '' ? NaN : Number(value);
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = getUserGuess();
  console.log(guessNumber);

  if (Number.isNaN(guessNumber)) {
    displayMessage('Please enter a number!');
    return;
  }
  if (guessNumber === randomNum) {
    correctAnswer();
    return;
  }
  wrongAnswer(guessNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

const wrongAnswer = function (guessNumber) {
  if (score > 1) {
    score--;
    displayScore(score);
    backGroundColorEffect('#b34040');

    setTimeout(function () {
      backGroundColorEffect('#222');
    }, 1000);
    wrongSoundEeffect.play();

    displayMessage(guessNumber > randomNum ? 'Too high!' : 'Too low!');
  } else {
    displayMessage('Game Over!');
    checkButtonEnableDisable(true);
    displayScore(0);
  }
};

const highScoreUpdate = function () {
  if (score > highestScore) {
    highestScore = score;
  }
  displayHighScore(highestScore);
};

const correctAnswer = function () {
  displayAnswer(randomNum);
  backGroundColorEffect('#60b347');
  highScoreUpdate();
  checkButtonEnableDisable(true);
  rightSoundEffect.play();
  setTimeout(function () {
    backGroundColorEffect('#222');
  }, 800);
  displayMessage('Correct Answer!');
};

const resetGame = function () {
  score = 20;
  displayAnswer('?');
  displayMessage('Start guessing. . .');
  checkButtonEnableDisable(false);
  displayScore(score);
  displayUserGuess('');
  randomNum = Math.trunc(Math.random() * 20) + 1;
};

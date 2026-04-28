"use strict";

const diceSelector = document.querySelector(".dice");
const rollDiceBtnSelector = document.querySelector(".btn--roll");
const holdBtnSelector = document.querySelector(".btn--hold");

const playerCurrentScoreSelector = function (playerId) {
  return document.getElementById(`current--${playerId}`);
};

const playerClassSelector = function (playerId) {
  return document.querySelector(`.player--${playerId}`);
};

const setRollingDiceBtnState = function (boo) {
  rollDiceBtnSelector.disabled = boo;
};

const setHoldDiceBtnState = function (boo) {
  holdBtnSelector.disabled = boo;
};

const switchPlayer = function () {
  playerClassSelector(0).classList.toggle("player--active");
  playerClassSelector(1).classList.toggle("player--active");
};

const currentPlayer = function () {
  return playerClassSelector(0).classList.contains("player--active") ? 0 : 1;
};

const playerTotalScoreSelector = function (playerId) {
  return document.getElementById(`score--${playerId}`);
};

const getCurrentPlayerScore = function () {
  return Number(playerCurrentScoreSelector(currentPlayer()).textContent);
};

const getCurrentPlayerTotalScore = function () {
  return Number(playerTotalScoreSelector(currentPlayer()).textContent);
};

const resetCurrentScore = function (playerId) {
  playerCurrentScoreSelector(playerId).textContent = 0;
};

const newBtnSelector = function () {
  return document.querySelector(".btn--new");
};

const resetGame = function () {
  playerCurrentScoreSelector(0).textContent = 0;
  playerCurrentScoreSelector(1).textContent = 0;
  playerTotalScoreSelector(0).textContent = 0;
  playerTotalScoreSelector(1).textContent = 0;
  setHoldDiceBtnState(false);
  setRollingDiceBtnState(false);
  playerClassSelector(0).classList.remove("player--winner");
  playerClassSelector(1).classList.remove("player--winner");
  playerClassSelector(0).classList.add("player--active");
  playerClassSelector(1).classList.remove("player--active");
  diceSelector.classList.add("hidden");
};

const diceRollingAnimation = function () {
  let delay = 60;
  let count = 0;
  let finalNumber;
  if (diceSelector.classList.contains("hidden"))
    diceSelector.classList.remove("hidden");
  setRollingDiceBtnState(true);
  const roll = function () {
    if (count >= 12) {
      const activePlayerId = currentPlayer();
      const activeCurrentScoreElement =
        playerCurrentScoreSelector(activePlayerId);
      setRollingDiceBtnState(false);

      if (finalNumber === 1) {
        activeCurrentScoreElement.textContent = 0;
        switchPlayer();
      } else {
        activeCurrentScoreElement.textContent =
          Number(activeCurrentScoreElement.textContent) + finalNumber;
      }
      return;
    }

    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    finalNumber = randomNumber;
    diceSelector.src = `documents/dice-${randomNumber}_副本.png`;

    count++;
    delay *= 1.15;

    setTimeout(roll, delay);
  };
  roll();
};

resetGame();

rollDiceBtnSelector.addEventListener("click", diceRollingAnimation);

holdBtnSelector.addEventListener("click", function () {
  const activeId = currentPlayer();
  const newTotal = getCurrentPlayerScore() + getCurrentPlayerTotalScore();

  playerTotalScoreSelector(activeId).textContent = newTotal;
  resetCurrentScore(activeId);

  if (newTotal >= 100) {
    playerClassSelector(activeId).classList.add("player--winner");
    setRollingDiceBtnState(true); // Disable game
    setHoldDiceBtnState(true);
  } else {
    switchPlayer();
  }
});

newBtnSelector().addEventListener("click", resetGame);

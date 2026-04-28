"use strict";

const modalSelector = document.querySelectorAll(".modal");
const overlaySelector = document.querySelector(".overlay");
const btnCloseModalSelector = document.querySelectorAll(".close-modal");
const btnsOpenModalSelector = document.querySelectorAll(".show-modal");
const keirEagenAudio = new Audio("../assests/audio/Kier.mp3");

let currentOpenedModal = undefined;
let isModalActive = false;

const openModal = function () {
  if (currentOpenedModal == 1) keirEagenAudio.play();
  modalSelector[currentOpenedModal].classList.remove("hidden");
  overlaySelector.classList.remove("hidden");
  isModalActive = true;
};

const closeModal = function () {
  modalSelector[currentOpenedModal].classList.add("hidden");
  overlaySelector.classList.add("hidden");
  isModalActive = false;
};

for (let i = 0; i < btnsOpenModalSelector.length; i++) {
  btnsOpenModalSelector[i].addEventListener("click", function () {
    currentOpenedModal = i;
    openModal();
  });
}

for (let i = 0; i < btnCloseModalSelector.length; i++) {
  btnCloseModalSelector[i].addEventListener("click", function () {
    closeModal();
  });
}

document.addEventListener("keyup", function (e) {
  if (isModalActive && e.key === "Escape") {
    closeModal();
  }
});

overlaySelector.addEventListener("click", closeModal);

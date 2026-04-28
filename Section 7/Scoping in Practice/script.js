"use strict";

function getCurrentYear() {
  return new Date().getFullYear();
}

function calcAge(birthYear) {
  const myAge = getCurrentYear() - birthYear;

  return `You are ${myAge}, born in ${birthYear}`;
}

const age = calcAge(2004);
console.log(age);

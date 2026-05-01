"use strict";

const movements = [-5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(acc);
  return (acc += cur);
}, 0 /* start counting from zero */);

console.log(balance);

// Find max using reduce method

const max = movements.reduce((acc, mov) => {
  return acc < mov ? mov : acc;
}, movements[0]);

console.log(max);

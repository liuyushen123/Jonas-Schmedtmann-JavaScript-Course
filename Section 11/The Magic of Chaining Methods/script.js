"use strict";

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// PIPELINE
const total = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 2)
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);

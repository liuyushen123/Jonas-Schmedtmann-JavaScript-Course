"use strict";

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const deposits = movements.filter(function (movement) {
  return movement > 0;
});

const withdrawal = movements.filter(function (movement) {
  return movement < 0;
});

console.log(movements);
console.log(deposits);
console.log(withdrawal);

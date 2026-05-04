"use strict";

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

console.log(movements.join(" | "));

// Equality
console.log(movements.includes(-130));

// Condition
const anyDeposits = movements.some((movement) => movement > 5000);
console.log(anyDeposits);

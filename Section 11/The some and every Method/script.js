"use strict";

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

console.log(movements);

const lastWithdrwal = movements.findLastIndex((mov) => mov < 0);

console.log(lastWithdrwal);

const message = "Your lastest large movement was X movements ago";

const lastestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1000,
);

console.log(lastestLargeMovementIndex);
console.log(
  `Your latest large movement was ${movements.length - 1 - lastestLargeMovementIndex} movements ago`,
);

// EVERY method
console.log(movements.every((mov) => isFinite(mov)));

const desposite = (mov) => mov > 0;

console.log(movements.some(desposite));
console.log(movements.every(desposite));
console.log(movements.reduce(desposite));

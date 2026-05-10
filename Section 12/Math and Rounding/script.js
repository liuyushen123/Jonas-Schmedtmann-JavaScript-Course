"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Lecture

// Square
console.log(Math.sqrt(25));

// root
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Find Max
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 17, 12, 31, "23", 123));

// Find Min
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//Random Integer Function
const randomInt = function (min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(`Your random number between ${max} - ${min} is: ${randomNum}`);
};

randomInt(10, 20);
randomInt(0, 3);

// Rounding integers
console.log(Math.trunc(23.3)); // 23  -> removes decimal part (cuts off everything after .)

console.log(Math.round(23.3)); // 23  -> rounds to nearest integer (.3 rounds down)
console.log(Math.round(23.9)); // 24  -> rounds to nearest integer (.9 rounds up)

console.log(Math.ceil(23.3)); // 24  -> always rounds UP to the next integer
console.log(Math.ceil(23.9)); // 24  -> always rounds UP

console.log(Math.floor(23.3)); // 23  -> always rounds DOWN
console.log(Math.floor("23.9")); // 23 -> converts string to number, then rounds DOWN

// Rounding
console.log((2.7).toFixed(0)); // 3 -> will round to the decimal points you passed in
console.log((2.7).toFixed(3));
console.log(+(2.7).toFixed(2)); // Will return a string so parse it back to int
console.log(+(2.7).toFixed(5));

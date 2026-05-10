"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// =========================
// MODULO / REMAINDER
// =========================

console.log(13 % 5); // 3
// 13 divided by 5 leaves remainder 3.

// Use case:
// Keeps a number inside a range.
//
// y % x  -> result always stays between 0 and x-1
//
// Example:
console.log(27 % 10); // 7
// Keeps only the last digit.

console.log(123 % 100); // 23
// Keeps last 2 digits.

// Very common for:
// clocks, wrapping indexes, cycling values,
// checking even/odd numbers.

console.log(8 % 2); // 0
// Even number because remainder is 0.

console.log(7 % 2); // 1
// Odd number because remainder is 1.

// =========================
// GETTING LAST DIGIT
// =========================

console.log(1234 % 10); // 4
// Gets the last digit.

console.log(Math.trunc(1234 / 10)); // 123
// Removes the last digit.

// Together they are powerful:
// % 10 -> read last digit
// / 10 -> remove last digit

// Check for even number

const isEven = function (number) {
  return !Boolean(number % 2);
};

console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(52));

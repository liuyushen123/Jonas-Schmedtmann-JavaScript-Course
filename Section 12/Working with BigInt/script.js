"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const biggestNumber = 2 ** 53 - 1;
console.log(biggestNumber + 10);

console.log(852190831029830129547120983120n);
console.log(BigInt(852190831029830129547120983120n));

const huge = 12093812094812095n;
const num = 2314;

// Cannot mix with bigin with normal number
console.log(huge * BigInt(num));
console.log(20n > 15);

// Difference type
console.log(20n === 20); // -> false
console.log(typeof 20n);
console.log(typeof 20);

// Let's try lose operator
console.log(20n == 20); // And this will be -> true

// Divisions
console.log(10n / 3n); // Since BigInt is indeed a integer will be -> 3n
console.log(10 / 3);

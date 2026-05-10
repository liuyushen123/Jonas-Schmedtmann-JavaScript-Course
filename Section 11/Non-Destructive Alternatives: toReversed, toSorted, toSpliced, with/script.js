"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
const reversedArr = arr.toReversed();
console.log(reversedArr);
console.log(arr);

// movements[1] = 2000;

const updatedArray = arr.with(1, 2000);

console.log(arr);
console.log(updatedArray);

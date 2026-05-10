"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const getRandomNumber = function () {
  return Math.floor(Math.random() * 10);
};

const x = new Array(7);

console.log(x);

console.log(x.map(() => 5));
// x.fill(1);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

const newArray = Array.from({ length: 7 }, () => 1);

console.log(newArray);

const newArray2 = Array.from({ length: 7 }, function (current, index, array) {
  return index + 1;
});

console.log(newArray2);

const randomArray = Array.from(
  { length: getRandomNumber() },
  function (current, index, array) {
    return getRandomNumber() + i;
  },
);

console.log(randomArray);

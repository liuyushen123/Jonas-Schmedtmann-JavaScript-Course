"use strict";

/*
🐶 Coding Challenge #1: Dog Ages
📝 Problem

Julia and Kate are studying about dogs. Each of them has data about dog ages.

Julia’s data: [3, 5, 2, 12, 7]
Kate’s data: [4, 1, 15, 8, 3]

👉 However, Julia made a mistake:

The first 2 and the last 2 entries are actually cats, not dogs.

If the dog is 3 years or older:
Dog number X is an adult, and is Y years old
If the dog is less than 3 years old:
Dog number X is still a puppy
*/

const checkDogs = function (juliaData, kateData) {
  const correctedJuliaData = juliaData.slice(1, juliaData.length - 2);

  const totalData = [...correctedJuliaData, ...kateData];

  totalData.forEach(function (age, index, array) {
    age >= 3
      ? console.log(`Dog number ${index} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${index} is still a puppy🐶`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

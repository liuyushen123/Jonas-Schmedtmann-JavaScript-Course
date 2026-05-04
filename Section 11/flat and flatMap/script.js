"use strict";

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

const deepArr = [[[[[[[[[[arr]]]]]]]]]];
console.log(arr.flat());
console.log(deepArr.flat(Infinity));

const account1 = {
  owner: "Yuchen Liu",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat(Infinity);
console.log(allMovements);
const overallBalance = allMovements.reduce(
  (accumulator, movement, index, array) => accumulator + movement,
  0,
);
console.log(overallBalance);

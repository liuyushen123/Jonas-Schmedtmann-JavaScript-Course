"use strict";

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const groupMovements = Object.groupBy(movements, function (movement) {
  return movement > 0;
});

console.log(groupMovements);

const account1 = {
  owner: "Yuchen Liu",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1,
  type: "Premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "Premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "Standard",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "Basic",
};

const accounts = [account1, account2, account3, account4];

const groupedMovements = Object.groupBy(accounts, function (account) {
  return account.movements.length;
});

console.log(groupedMovements);

const groupAccountByType = Object.groupBy(accounts, function (account) {
  return account.type;
});

console.log(groupAccountByType);

"use strict";

//////////////////////////////////////////////////////
// Array Methods Practice

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

const bankDeposites = accounts.flatMap(function (account) {
  return account.movements;
});

console.log(bankDeposites);

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((cur) => cur >= 1000).length;

console.log(numDeposits1000);

const newNumDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((counter, value, index, array) => {
    if (value >= 1000) return ++counter;
    else return counter;
  }, 0);

console.log(newNumDeposits1000);

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? ++sums.deposits : ++sums.withdrawal;
      return sums;
    },
    { deposits: 0, withdrawal: 0 },
  );

console.log(sums);

const convertTitleCase = function (title) {
  const expections = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "for",
    "nor",
    "or",
    "so",
    "yet",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "off",
    "on",
    "per",
    "to",
    "up",
    "via",
    "vs.",
    "v.",
  ];
  const titleArray = title.toLowerCase().split(" ");
  const outputArray = [];

  titleArray.forEach(function (word) {
    if (expections.includes(word)) {
      outputArray.push(word);
      return;
    }

    outputArray.push(word.slice(0, 1).toUpperCase() + word.slice(1));
  });

  return outputArray.join(" ");
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

"use strict";

// Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log("-".repeat(65));

//Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // Set does not have a key
}); // And it doesnt have index

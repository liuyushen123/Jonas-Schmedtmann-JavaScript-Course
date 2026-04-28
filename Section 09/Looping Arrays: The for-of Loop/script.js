"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

// combine arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// basic for-of loop
for (const item of menu) {
  console.log(item);
}

console.log();

for (const i in menu) {
  console.log(i);
}

console.log();

for (const item of menu.entries()) {
  console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log();

for (const [i, e] of menu.entries()) {
  console.log(`${i + 1}: ${e}`);
}

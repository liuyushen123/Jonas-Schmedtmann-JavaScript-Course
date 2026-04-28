"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main Ingredient: ${mainIngredient}`);
    console.log("Following Ingredients:");
    for (let i = 0; i < otherIngredients.length; i++)
      console.log(`${i + 1}: ${otherIngredients[i]}`);
  },
};

const arr = [1, 2, ...[3, 4]];
const [a, b, ...whatever] = [1, 2, 3, 4, 5];
console.log(arr);
console.log(a, b, whatever);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 5, 3, 1, 2, 3, 4);
add(2, 31, 13, 4, 23, 12, 41, 31, 24, 1, 23, 41, 2, 4, 124, 12, 3);

const x = [23, 5, 8];
add(...x);

restaurant.orderPizza("mushrooms");

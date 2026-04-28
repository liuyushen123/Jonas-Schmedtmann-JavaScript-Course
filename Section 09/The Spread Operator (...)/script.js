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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your ddelicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(badNewArr);
console.log();
console.log(...newArr);

console.log(restaurant.mainMenu);
restaurant.mainMenu.push("Gnocci");

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

console.log(restaurant.mainMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

const myName = "Yuchen";
const letters = [...myName, "L", "i", "u"];
console.log(...letters);

const ingredients = [
  //   prompt("Let\'s make pasta! Ingredient 1?"),
  //   prompt("Ingredient 2"),
  //   prompt("Ingredient 3"),
];

console.log(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(newRestaurant);
console.log(restaurant);
console.log(restaurantCopy.name);
console.log(restaurant.name);

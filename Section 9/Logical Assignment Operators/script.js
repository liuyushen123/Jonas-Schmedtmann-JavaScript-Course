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

const rest1 = {
  name: "Capri",
  numGuests: 20,
  owner: "Yuchen Liu",
};

const rest2 = {
  name: "La Piazza",
  numGuests: 0,
  owner: "Giovanni Rossi",
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

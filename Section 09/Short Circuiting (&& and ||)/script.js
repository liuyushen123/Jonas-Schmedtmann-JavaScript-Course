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

// short-circuiting
console.log("----------------------------   OR   ----------------------------");
console.log(3 || "Jonas");
console.log(3 && "Jonas" && "Yuchen");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log("" && 0);

const guests1 = restaurant.numGuest || 10;
console.log(guests1);
console.log(
  "----------------------------   AND   ----------------------------",
);

console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "jonas");

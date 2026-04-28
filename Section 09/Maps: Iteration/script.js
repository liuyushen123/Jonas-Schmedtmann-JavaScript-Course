"use strict";

const restaurantObj = {
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
};

// 创建一个 Map
const questionMap = new Map([
  ["name", "Classico Italiano"],
  [1, "Firenze, Italy"],
  [2, "Lisbon, Portugal"],
  ["categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]],
  ["open", 11],
  ["close", 23],
  [true, "We are open :)"],
  [false, "We are closed :("],
]);

const restaurantMap = new Map(Object.entries(restaurantObj));

console.log(restaurantMap);

// 👉 基本 iteration
for (const [key, value] of restaurantMap) {
  console.log(`${key} is mapped to ${value}`);
}

for (const [key, value] of questionMap) {
  if (typeof key === "string") console.log(`Answer ${key}: ${value}`);
}

const answer = 13;
const response = questionMap.get(
  questionMap.get("open") < answer && questionMap.get("close") > answer,
);

console.log(response);
console.log([...questionMap]);
console.log(questionMap.entries());
console.log([...questionMap.keys()]);
console.log(questionMap.values());

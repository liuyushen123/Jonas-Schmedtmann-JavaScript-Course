"use strict";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`Intersection: ${commonFoods}`);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(`Union ${italianMexicanFusion}`);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

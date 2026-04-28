"use strict";

const restaurant = {
  openingHours: {
    mon: {
      // open property is missing
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
};

// CASE 1: property missing (safe, returns undefined)
console.log(restaurant.openingHours.mon.open);

// CASE 2: object missing (CRASH)
// console.log(restaurant.openingHours.tue.open);

// CASE 3: object missing with optional chaining (safe)
console.log(restaurant.openingHours.tue?.open);

// CASE 4: property missing with optional chaining (still undefined)
console.log(restaurant.openingHours.mon?.open);

// CASE 5: safest version (protect all levels)
console.log(restaurant.openingHours?.tue?.open);

// CASE 6: with default value
const open = restaurant.openingHours.mon?.open ?? "closed";
console.log(open);

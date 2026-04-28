"use strict";

const airline = "China Airlines";
const plan = "boeing 378";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "yUChEN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase();

const passengerName = passengerCorrect + passengerLower.slice(1);

console.log(passenger);
console.log(passengerLower);
console.log(passengerName);

// Check Email:

const email = "liuyushen123@gmail.com";
const loginEmail = "  LiUyuShen123@gmail.com";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);


// replacing
const priceGreatBritain = "288,965"


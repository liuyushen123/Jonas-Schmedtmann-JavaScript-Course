"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}: ${flightNum}`,
    );
    this.bookings.push({
      flight: `${this.iataCode}`,
      flightNum: `${flightNum}`,
      passengerName: `${passengerName}`,
    });
  },
};

const eurowing = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");
bookLH(24, "Yuchen Liu");
bookLX(25, "Peter Parker");

const bookEW23 = book.bind(eurowing, 23);
bookEW23("Gojo Satoro");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (taxRate, value) => value + value * taxRate;

console.log(addTax(0.1, 200));

// So we basically changed it to => taxRate = 0.23, value) => value + value * taxRate
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  // This rate takes in an argument

  return function (value) {
    // Here we are returning an function that takes in a argument called value!!!
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));

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
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  name: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowing, "LH324", "Yuchen");
book.call(lufthansa, 239, "Marry Cooper");
book.call(swiss, "AVH239", "Peta Paka");

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

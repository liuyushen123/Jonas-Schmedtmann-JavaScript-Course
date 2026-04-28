"use strict";

const airline = "China Airlines";
const plan = "boeing 378";

console.log(plan[0]);
console.log("B737"[2]);

console.log(airline.length);
console.log(airline[airline.indexOf("r")]);
console.log(airline.indexOf(airline[8]));

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const middle = seat.slice(-1);

  middle === "B" || middle === "E"
    ? console.log("You got the middle seat :(")
    : console.log("You got lucky :)");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

const myAsObj = new String("Yuchen");
console.log(myAsObj.valueOf());

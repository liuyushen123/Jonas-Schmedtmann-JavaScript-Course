"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30Pixel", 16));
console.log(Number.parseInt("e23", 16));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Best way to check if it is a valid number
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20x"));

//Integer check
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

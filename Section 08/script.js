"use strict";

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";

      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice

console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas1 = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas1.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas1.calcAge;
matilda.calcAge();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

const jonas2 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas2.greet();
jonas2.calcAge();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};
// ⚠️ This will throw error in strict mode (no arguments in arrow)
// addArrow2(2, 5, 8);

///////////////////////////////////////
// Object References in Practice

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

console.log("Before:", jessica1);
console.log("After:", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  familiy: ["Alice", "Bob"],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

// Deep copy
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push("Mary");
jessicaClone.familiy.push("John");

console.log("Original:", jessica);
console.log("Clone:", jessicaClone);

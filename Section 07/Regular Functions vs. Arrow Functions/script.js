"use strict";

var firstName = "Yuchen";
console.log(this);
const Yuchen = {
  firstName: "Yuchen",
  year: 1991,
  // Solution 1
  calcAge: function () {
    console.log(this);
    console.log(2036 - this.year);
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  //Solution 2
  calcAge2: function () {
    console.log(this);
    console.log(2036 - this.year);
    const self = this;
    const isMillenial2 = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

Yuchen.greet();
Yuchen.calcAge();
Yuchen.calcAge2();

// arguments keyword
const addEpr = function (a, b) {
  for (let i = 0; i < arguments.length; i++) [console.log(arguments[i])];
  return a + b;
};

addEpr(2, 5, 6, 7, 8, 2, 3, 4);

"strict";

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(2004);

const Yuchen = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);
  },
};

Yuchen.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

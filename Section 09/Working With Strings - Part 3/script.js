"use strict";

console.log("a+very+nice+string+".split("+"));
console.log("Yuchen Liu".split(" "));

const [firstNmae, lastName] = "Yuchen Liu".split(" ");

const newName = ["Mr.", firstNmae, lastName].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  const nameUpperReplace = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpperReplace.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(nameUpperReplace.join(" "));
  console.log(namesUpper.join(" "));
};

capitalizeName("yuchen liu");

const makeCreditCard = function (number) {
  const str = number.toString();
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

makeCreditCard(123124125);

const message2 = "Bad weather... All Departures are delayed...   :(  ";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${" 🛩️ ".repeat(n)}`);
};

for (let i = 0; i < 20; i++) {
  planesInLine(i);
  console.log();
}

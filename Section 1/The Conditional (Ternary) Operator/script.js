// This Ternary Operation
const age = 23;
age >= 18 ? console.log(`I like to drink wine!`) : console.log(`I like to drink water!`);

// This is equivalent to

if (age >= 18) {
    console.log("I like to drink wine!")
} else {
    console.log("I like to drink water!")
}

let drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

// This is equivalent to

if (age >= 18) {
    drink = 'wine';
} else {
    drink = 'water';
}

console.log(`I like to drink ${age >= 18 ? "wine2" : "water2"}`)

const bill = 275;
console.log(`The bill was ${bill}, the tip was ${bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20} `);
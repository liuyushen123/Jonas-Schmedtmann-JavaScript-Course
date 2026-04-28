`use strict`

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michale", "Steven", "Peter"];
console.log(friends);

friends.push("Yuchen");
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(years[0]);
console.log(friends.length + friends.length);

// Since these array are const
// You cannot clear the entire array by re-assigning it to an empty array
// But you can set its length to 0
// friends.length = 0
friends.length = 0;
console.log(friends);



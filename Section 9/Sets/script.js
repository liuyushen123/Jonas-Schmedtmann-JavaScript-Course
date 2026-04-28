"use strict";

const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Rice"]);

console.log(orderSet);

console.log(new Set("Yuchen"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Garlic Bread"));
orderSet.add("Gralic Bread");
orderSet.add("Gralic Bread");
console.log(orderSet);
console.log(orderSet.has("Garlic Bread"));
orderSet.delete("Rice");
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ["Waiter", "Cheif", "Waiter", "Manager", "Cheif", "Waiter"];
const staffUnique = [...new Set(staff)].length;
console.log(staffUnique);

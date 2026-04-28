"use strict";

/*
This is the Nullish Coalescing Operator (??). 
It was introduced to JavaScript (ES2020) to fix a specific "bug" 
that occurs when using the OR (||) operator for default values.

While || looks for any falsy value (like 0 or ""), 
?? only looks for nullish values (null or undefined).
*/

const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*

The "Zero" Problem
The main reason we use Nullish Operator (??) is that in many applications, 
0 is a perfectly valid piece of data, 
but JavaScript treats it as "false."

*/

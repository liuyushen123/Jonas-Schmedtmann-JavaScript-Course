'use strict'

function calcAge1(birthYear) {
    return 1 / birthYear;
}


console.log(calcAge1(-2));


const calcAge2 = function (birthYear) {
    return 2777 - birthYear;
}

const age2 = calcAge2(1997)

console.log(age2)
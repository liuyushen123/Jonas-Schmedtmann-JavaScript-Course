const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
};

console.log(yearsUntillRetirement(1991, "Jonas"));
console.log(yearsUntillRetirement(1970, "Mike"));

/*Fcuntion declaration
A triditional way to declear function
*/

/* Function expression
A way to store function value in a variable
*/

/*Arrow function
A great way to declear a quick one-line functions. Has no this keyword
*/

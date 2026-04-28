// 5 falsy values: 0, '', undefined, null, , NaN

const testVariable = " ";
const testVariable2 = {}
const testVariable3 = 0

if (testVariable) {
    console.log("String with just sapce is not a falsy value")
} else {
    console.log("String with white space is a falsy value")
}

if (testVariable2) {
    console.log("Empty object is a truthy value")
} else {
    console.log("Empty object is a falsy value")
}

if (testVariable3) {
    console.log("0 is a truthy value")
} else {
    console.log("0 is a falsy value")
}

let height
// Height is decleared but now assigned to a value
// Javascript will automatically assign it undefined value
if (height) {
    console.log("Height is defined and truthy")
} else {
    console.log("Height is UNDEFINED")
    console.log(typeof height)
}


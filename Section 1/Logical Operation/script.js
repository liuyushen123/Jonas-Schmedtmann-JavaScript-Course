const hasDriverLicense = true; // A
const hasGoodVision = false // B

// And (&&)
// Or (||)
// Negate (!)

console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is good to drive a car")
} else {
    console.log("Sarah should stay home")
}

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if ((hasDriverLicense && hasGoodVision) && !isTired) {
    console.log("Sarah should get some rest before driving")
} else {
    console.log("Something")
}
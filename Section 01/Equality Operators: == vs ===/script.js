//Triple euqal (===) the strict check and does not perform type co ercion
//Douvle equal (==) the loose check and perform type coercion


const age = '18';
const testVariable = 256
if (age == 18) console.log("You're 18 years old!")


//This is a great example of loose check with type coercion
//"2" + "60" will concatenated as string "260"
//coercion (-) will conver this "260" string to number and perform minuse operation 260 - 4 = 256
//And 256 will stay as number
if (testVariable === "2" + "60" - 4) console.log("YAY!");

const favorite = Number(prompt("What's your favourite"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("23 is an okay number")
} else if (favorite === 7) {
    console.log("7 is a cool number!")
} else {
    console.log(`I hate ${favorite} `)
}



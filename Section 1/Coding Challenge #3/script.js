const socreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(socreDolphins, scoreKoalas)

if ((socreDolphins > scoreKoalas) && (socreDolphins >= 100)) {
    console.log("Dolphins win the trophy!")
} else if ((scoreKoalas > socreDolphins) && (scoreKoalas >= 100)) {
    console.log("Koalas win the trophy!")
} else if ((scoreKoalas === socreDolphins) && (scoreKoalas >= 100) && (socreDolphins >= 100)) {
    console.log("Both win the trophy!")
} else {
    console.log("No one wins the trophy")
}
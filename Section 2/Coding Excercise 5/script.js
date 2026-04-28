`use strict`

let scoreDolphins;
let scoreKoalas;
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function () {
    scoreDolphins = calcAverage(44, 23, 71);
    scoreKoalas = calcAverage(65, 54, 49);

    if (scoreDolphins === scoreKoalas) {
        console.log("No team wins...");
    } else if (scoreDolphins > scoreKoalas) {
        console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`)
    } else {
        console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`)
    }
}

checkWinner();
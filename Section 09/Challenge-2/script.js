"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Q1.
console.log(game.scored.entries());
for (const [i, player] of game.scored.entries()) {
  console.log(i);
  console.log(player);
  console.log(`Goal ${i + 1}: ${player}`);
}

// Q2.
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
console.log((average /= Object.values(game.odds).length));

// Q3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

// Q4: Bonus

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
const entries = Object.entries(scorers);
entries.sort((a, b) => a[1] - b[1]);
const sortedScorers = Object.fromEntries(entries);
console.log(sortedScorers);

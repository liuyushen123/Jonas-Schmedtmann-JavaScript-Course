"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log([...new Set(gameEvents.values())]);

gameEvents.delete(64);
console.log(gameEvents);

const timeFrame = [...gameEvents.keys()];
let sum = 0;
for (let i = 0; i < timeFrame.length; i++) {
  sum += timeFrame[i];
}
sum = sum / timeFrame.length;
console.log(sum);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`,
);

for (const [min, event] of gameEvents) {
  const half = min < 92 / 2 ? "First" : "Second";
  console.log(`${half} Half: At ${min} event ${event}`);
}

"use strict";

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
    owners: ["Alice", "Mark"],
    currentFood: 380,
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
    owners: ["Julia"],
    currentFood: 310,
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
    owners: ["Kate", "John"],
    currentFood: 340,
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
    owners: ["Sarah"],
    currentFood: 180,
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
    owners: ["Mike", "Emma"],
    currentFood: 290,
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
    owners: ["David"],
    currentFood: 420,
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
    owners: ["Sophia"],
    currentFood: 244.69,
  },
];

breeds.forEach(function (dog) {
  dog.recomendedFood = (dog.averageWeight ** 0.75 * 28).toFixed(2) - 0;
});

breeds.forEach(function (dog) {
  console.log("=".repeat(70));
  console.log(`Breed: ${dog.breed}`);
  console.log(`Average weight: ${dog.averageWeight} kg`);
  console.log(`Recomended food: ${dog.recomendedFood} grams/day`);
  console.log(
    `Favorite ${dog.activities.length <= 1 ? "activity" : "activities"}: ${dog.activities.join(", ")}`,
  );
});

const dogSarah = breeds.find(function (dog) {
  return dog.owners.includes("Sarah");
});

const isEatingOkay = function (dog) {
  if (dog?.recomendedFood < dog?.currentFood) {
    return "is eating too much";
  } else if (dog?.recomendedFood > dog?.currentFood) {
    return "is eating too little";
  }
  return "is eating okay";
};
console.log("=".repeat(80));
breeds.forEach(function (dog) {
  console.log();
  console.log(`${dog.owners.join(" and ")}'s dog ${isEatingOkay(dog)}`);
});

const ownersTooMuch = breeds
  .filter(function (dog) {
    return dog.recomendedFood < dog.currentFood;
  })
  .flatMap(function (dog) {
    return dog.owners;
  });

const ownersTooLittle = breeds
  .filter(function (dog) {
    return dog.recomendedFood > dog.currentFood;
  })
  .flatMap(function (dog) {
    return dog.owners;
  });

const processStrings = function (ownersArray) {
  const lastOwner = ownersArray.pop();
  const remainingOwners = ownersArray.join(", ");

  return `${remainingOwners}, and ${lastOwner}`;
};

console.log("=".repeat(80));
console.log(processStrings(ownersTooMuch));
console.log(processStrings(ownersTooLittle));

console.log(
  `There is dog that eat exactly as recomended: ${breeds.some((dog) => dog.currentFood === dog.recomendedFood)}`,
);

const checkEatingOkay = function (dog) {
  return (
    dog.currentFood < dog.recomendedFood * 1.1 &&
    dog.currentFood > dog.recomendedFood * 0.9
  );
};

console.log(breeds.every(checkEatingOkay));

const dogsEatingOkay = breeds.filter(function (dog) {
  return checkEatingOkay(dog);
});

console.log(
  `The dogs that are eating okay are ${processStrings(
    dogsEatingOkay.map(function (dog) {
      return dog.breed;
    }),
  )}`,
);

const dogsGroupedByPortion = Object.groupBy(breeds, function (dog) {
  if (dog.currentFood > dog.recomendedFood) {
    return "too-much";
  } else if (dog.currentFood < dog.recomendedFood) {
    return "too-little";
  } else {
    return "exact";
  }
});
console.log("=".repeat(80));

console.log(dogsGroupedByPortion);

console.log("=".repeat(80));

const dogsGroupedByOwners = Object.groupBy(breeds, function (dog) {
  return `${dog.owners.length}-owners`;
});

console.log(dogsGroupedByOwners);

console.log("=".repeat(80));

const dogsSorted = dogsEatingOkay.toSorted(function (a, b) {
  return a.recomendedFood - b.recomendedFood;
});

console.log(dogsSorted);

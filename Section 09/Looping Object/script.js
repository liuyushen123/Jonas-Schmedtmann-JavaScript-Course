const restaurant = {
  openingHours: {
    mon: {
      // open property is missing
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
};
const { openingHours } = restaurant;
console.log(openingHours);
for (const day of Object.keys()) {
  console.log(day);
}

const flightNum = "LH234";
const Yuchen = {
  name: "Yuchen Liu",
  passport: "125-51-4347",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === "125-51-4347") {
    console.log("Checked in");
  } else {
    console.log("Wrong Passport");
  }
};

checkIn(flightNum, Yuchen);
console.log(flightNum);
console.log(Yuchen);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(Yuchen);
console.log(Yuchen.passport);

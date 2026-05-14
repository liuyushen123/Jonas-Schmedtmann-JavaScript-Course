"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const account1 = {
  owner: "Yuchen Liu",
  username: "yl",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1,

  movementsDates: [
    "2026-01-18T21:31:17.178Z",
    "2026-02-02T07:42:02.383Z",
    "2026-02-15T09:15:04.904Z",
    "2026-03-01T10:17:24.185Z",
    "2026-03-18T14:11:59.604Z",
    "2026-04-02T17:01:17.194Z",
    "2026-04-19T23:36:17.929Z",
    "2026-05-08T10:51:36.790Z",
  ],

  currency: "CNY",
  locale: "zh-CN",
};

const account2 = {
  owner: "Jessica Davis",
  username: "jd",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2025-11-01T13:15:33.035Z",
    "2025-11-30T09:48:16.867Z",
    "2025-12-25T06:04:23.907Z",
    "2026-01-25T14:18:46.235Z",
    "2026-02-05T16:33:06.386Z",
    "2026-03-10T14:43:26.374Z",
    "2026-04-25T18:49:59.371Z",
    "2026-05-01T12:01:20.894Z",
  ],

  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  username: "stw",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2025-10-05T08:15:12.178Z",
    "2025-10-18T10:42:02.383Z",
    "2025-11-11T11:15:04.904Z",
    "2025-12-01T09:17:24.185Z",
    "2026-01-08T12:11:59.604Z",
    "2026-02-14T15:01:17.194Z",
    "2026-03-21T20:36:17.929Z",
    "2026-04-30T22:51:36.790Z",
  ],

  currency: "GBP",
  locale: "en-GB",
};

const account4 = {
  owner: "Sarah Smith",
  username: "ss",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2026-01-10T11:11:11.111Z",
    "2026-02-14T15:20:45.222Z",
    "2026-03-03T08:45:12.333Z",
    "2026-04-07T19:30:10.444Z",
    "2026-05-09T21:05:55.555Z",
  ],

  currency: "CAD",
  locale: "en-CA",
};

//new Date(year, month, day, hour, minute, second, millisecond)
// Month is 0 based

const future = new Date(2077, 10, 19, 15, 23);
const dayConverter = 86400000;
const currentDate = new Date();
const myWantedDate = new Date(2026, 5, 0);
console.log(+future * dayConverter); // Convert this into millisecond
console.log(myWantedDate);

const daysPassed = (date1, date2) => (date2 - date1) / dayConverter;

console.log(daysPassed(currentDate, myWantedDate));

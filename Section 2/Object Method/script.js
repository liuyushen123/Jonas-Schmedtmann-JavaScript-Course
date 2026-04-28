'use strict'

const yuchen = {
    firstName: "Yuchen",
    lastName: "Liu",
    birthYear: 2004,
    occupation: "Student",
    friends: ["Josh", "Will", "Jackson"],
    hasDriverLicemse: false,

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.occupation}, and he has ${this.hasDriverLicemse ? "a" : "no"} driver's license.`
    },

    getCurrentYear: function () {
        const d = new Date();
        let year = d.getFullYear();
        return year;
    },

    calcAge: function () {
        return this.getCurrentYear() - this.birthYear;
    },
}

console.log(yuchen.calcAge());
console.log(yuchen["calcAge"]());
console.log(yuchen.getSummary());





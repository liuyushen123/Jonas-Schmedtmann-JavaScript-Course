'use strict';

const yuchenArray = [
    'Yuchen',
    'Liu',
    2025 - 2004,
    'Student',
    ['Josh', 'Will', 'Jackson'],
];

const yuchen = {
    firstName: 'Yuchen',
    lastName: 'Liu',
    age: 2025 - 2024,
    occupation: 'Student',
    friends: ['Josh', 'Will', 'Jackson'],
};

console.log(yuchen);

yuchen.localtion = 'Nebraska';
yuchen.twitter = null;

const myString = `${yuchen.firstName} has ${yuchen.friends.length} friends and his best friend is called ${yuchen.friends[0]}`;
console.log(myString);

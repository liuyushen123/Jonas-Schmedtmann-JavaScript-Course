'use strict'

const jonasArray = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        break;
    }
    else if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// continue and break

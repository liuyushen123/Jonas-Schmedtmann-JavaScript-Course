"use strict";

const temperature = [3, -2, -6, -1, "error", 9, 13, 1, 17, 15, 14, 8, 5];
const newTemperature = [12, 14, 15, 61, 91];
// 1) Understanding the problem
// - What is temp amplitude? Answer difference highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 1) Understanding the problem
// - What is temperature amplitude??
// It is the difference between highest and lowest temperature
// How to compute max and min temperatures
const calcTempAmplitude = function (t1, t2) {
    const temperatures = t1.concat(t2);

    let maximum = temperatures[0];
    let minimum = temperatures[0];
    for (let i = 1; i < temperatures.length; i++) {
        let curTemp = temperatures[i];
        if (curTemp > maximum) {
            maximum = curTemp;
        }

        if (curTemp < minimum) {
            minimum = curTemp;
        }
    }

    console.log(maximum);
    console.log(minimum);
    console.log(maximum - minimum);
};

calcTempAmplitude(temperature, newTemperature);

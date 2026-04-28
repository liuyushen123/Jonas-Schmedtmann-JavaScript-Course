const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: parseInt(prompt("Degress celsius:")),
    };
    debugger;

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

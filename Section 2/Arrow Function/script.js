const calcAge = birthyear => 2037 - birthyear;

const age3 = calcAge(1991);
console.log(age3);

const yearsUntillRetirement = (birthyear, firstName) => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthyear;
    retireYear = 65 - age;

    return `Dear ${firstName} you have ${age} untill retirement`
}

yearsUntillRetirement(2004, "Yuchen")



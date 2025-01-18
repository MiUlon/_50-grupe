function calculate(number1, operation, number2) {
    if (operation === '+') {
        return number1 + number2;
    } else if (operation === '-') {
        return number1 - number2;
    } else if (operation === '*') {
        return number1 * number2;
    } else if (operation === '/') {
        return number1 / number2;
    };
};

console.log(calculate(7, '+',  5));
console.log(calculate(7, '-',  5));
console.log(calculate(7, '*',  5));
console.log(calculate(7, '/',  5));

console.clear();

const sum = (number1, number2) => number1 + number2;

function diff(number1, number2) {
    return number1 - number2;
};

function calculate2(number1, operation, number2) {
    const mathFunctions = {
        '+': sum,
        '-': diff,
        '*': (number1, number2) => number1 * number2,
        '/': (number1, number2) => number1 / number2,
        '**': (number1, number2) => number1 ** number2,
    };

    return mathFunctions[operation](number1, number2);
};

console.log(calculate2(7, '+', 5));
console.log(calculate2(7, '-', 5));
console.log(calculate2(7, '*', 5));
console.log(calculate2(7, '/', 5));
console.log(calculate2(7, '**', 5));
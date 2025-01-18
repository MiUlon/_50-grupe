function monetosMetimas() {
    const skaicius = Math.random();

    if (skaicius < 0.5) {
        return 'Skaicius';
    } else {
        return 'Herbas';
    };
};

let = skaiciusCount = 0;
let = herbasCount = 0;

for (let i = 0; i < 10; i++) {
    console.log(monetosMetimas());

    if (monetosMetimas() === 'Skaicius') {
        ++skaiciusCount;
    } else {
        ++herbasCount;
    };
};

console.log('Skaicius count:', skaiciusCount);
console.log('Herbas count:', herbasCount);

console.clear();

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function dayOfTheWeek() {
    const step = week.length;
    const randomNumber = Math.floor(Math.random() * step);
    return week[randomNumber];
};

for (let i = 0; i < 10; i++) {
    console.log(dayOfTheWeek());
};

console.clear();

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printRandomNumberFromNumbersArray(list) {
    const index = Math.floor(Math.random() * numbersList.length);
    return list[index];
};

for (let i = 0; i < 10; i++) {
    console.log(printRandomNumberFromNumbersArray(numbersList));
};

console.clear();

let randomNumbersList = [];

for (let i = 23; i <= 617; i++) {
    randomNumbersList.push(i);
};

function randomNumberFrom23To617(list) {
    const index = Math.floor(Math.random() * randomNumbersList.length);
    return list[index];
};

for (let i = 0; i < 10; i++) {
    console.log(randomNumberFrom23To617(randomNumbersList));
};

console.clear();

// for (let i = 0; i < 200; i++) {
//     console.log(Math.floor(Math.random() * (617 - 23) + 23));
// };

do {
    console.log(Math.floor(Math.random() * (618 - 23) + 23))
}   while (Math.floor(Math.random() * (618 - 23) + 23) !== 617);
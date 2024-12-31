/*
ARROW FUNCTION - rodykline funkcija, lambda funkcija;
*/

const n1 = 7;
const n2 = 5;

function sum(n1, n2) {
    return n1 + n2;
};

console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

function diff(n1, n2) {
    return n1 - n2;
};

console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

function multi(n1, n2) {
    return n1 * n2;
};

console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

console.clear();

const divide = function(n1, n2) {
    return n1 / n2;
};

console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

const multi2 = function(n1, n2) {
    return n1 * n2;
};

console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
const multi3 = (n1, n2) => {
    return n1 * n2;
};

console.log(`${n1} * ${n2} = ${multi3(n1, n2)}`);

const multi4 = (n1, n2) => n1 * n2;

console.log(`${n1} * ${n2} = ${multi4(n1, n2)}`);

const divide2 = (n1, n2) => {
    return n1 / n2;
};

console.log(`${n1} / ${n2} = ${divide2(n1, n2)}`);

const divide3 = (n1, n2) => n1 / n2;

console.log(`${n1} / ${n2} = ${divide3(n1, n2)}`);

console.clear();

function square(n) {
    return n * n;
};

console.log(square(2));

const square2 = function(n) {
    return n * n;
};

console.log(square2(3));

const square3 = (n) => {
    return n * n;
};

console.log(square3(4));

const square4 = (n) => n * n;

console.log(square4(5));

const square5 = n => n * n; // n without () because there is only 1 parameter

console.log(square5(6));

console.clear();

function hi(name) {
    return `Hi, my name is ${name}!`
};

console.log(hi('Mindaugas'));

const hi2 = function(name) {
    return `Hi, my name is ${name}!`
};

console.log(hi2('Mindaugas'));

const hi3 = (name) => {
    return `Hi, my name is ${name}!`;
};

console.log(hi3('Mindaugas'));

const hi4 = (name) => `Hi, my name is ${name}!`;

console.log(hi4('Mindaugas'));

const hi5 = name => `Hi, my name is ${name}!`;

console.log(hi5('Mindaugas'));

console.clear();

function abbr(firstName, lastName) {
    return `${firstName[0]}.${lastName[0]}.`
};

console.log(abbr('Mindaugas', 'Ulonas'));

const abbr2 = function (firstName, lastName) {
    return `${firstName[0]}.${lastName[0]}.`;
};

console.log(abbr2('Mindaugas', 'Ulonas'));

const abbr3 = (firstName, lastName) => {
    return `${firstName[0]}.${lastName[0]}.`;
};

console.log(abbr3('Mindaugas', 'Ulonas'));

const abbr4 = (firstName, lastName) => `${firstName[0]}.${lastName[0]}.`;

console.log(abbr4('Mindaugas', 'Ulonas'));

console.clear();

console.log(vienas());

function vienas() {
    return 'VIENAS';
};

console.log(vienas());

console.clear();

const du = () => 'DU';

console.log(du());
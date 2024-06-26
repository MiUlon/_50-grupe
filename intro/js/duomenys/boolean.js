/*
BOOLEAN - logine reiksme

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! not
*/

console.log('Testing Boolean test');

const userName = 'Jonas';
const age = 31;
const isSunShining = true;
const hasFuel = false;

console.log('Sun:', isSunShining, 'Fuel:', hasFuel);

console.log('KAIP NENAUDOTI: (true + true: 1 + 1)', true + true);
console.log('KAIP NENAUDOTI: (true + false: 1 + 0)', true + false);

console.log('-------------------');

console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);

const hasMoney = true;
const isOlderThan20 = false;

console.log('Has enough money to buy alcohol:', hasMoney, 'Older than 20 years old?', isOlderThan20, 'Can buy alcohol?', hasMoney && isOlderThan20);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = false;
const isYoung = false;
const isRich = false;

const willIGoTo = isBeautiful && isYoung && isRich;

console.log('Grazus:', isBeautiful, 'Jaunas:', isYoung, 'Turtingas:', isRich);
console.log('Ar mergina eis i pasimatyma:', willIGoTo);

console.log('-------------------');

//VAIKINAS

const willIGoToMale = isBeautiful || isYoung || isRich;
console.log('Grazi:', isBeautiful, 'Jauna:', isYoung, 'Turtinga:', isRich);
console.log('Ar vaikinas eis i pasimatyma:', willIGoToMale);

console.log('---------------------');

console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);

console.log('true && true || false', true && true || false);
console.log('true && false || false:', true && false || false);

console.log(!true);
console.log(!false);

const tiesa = true;
console.log(!tiesa);

console.log('---------------------');

// israsyti visus imanomus variantus: 128

console.log('1. true && true && true && true', true && true && true && true);
console.log('2. true && true && true && false', true && true && true && false);
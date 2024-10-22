/*
Numbers:
- integer
- decimal
- positive
- negative
- normal (all above)
- null (positive and negative)
- not normal (Infinity, -Infinity, NaN (not-a-number))
- Mathematical operators: +, -, *, /, **, %, ++, -- Prisikyrimo: +=, -+, /=, *=, **=, %=
*/

const pirmas = 5;
const antras = 777;
const trecias = -2.727;
const nulis = 0;
const asd = 999;
const test = 123;

console.log(3.1415);
console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(nulis);
console.log(asd);
console.log(test);

const suma = pirmas + antras;
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const sandauga = pirmas * antras;
console.log(sandauga);

const dalmuo1 = pirmas / antras;
console.log(dalmuo1);

const dalmuo2 = antras / pirmas;
console.log(dalmuo2);

const laipsnis1 = pirmas ** antras;
console.log(laipsnis1);

const laipsnis2 = antras ** pirmas;
console.log(laipsnis2);

const liekana1 = pirmas % antras;
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(antras, '%', pirmas, '=', liekana2);

console.clear();

let pinigine = 0;
console.log(pinigine);

pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);

console.clear();

let money = 0;
console.log(money);

money = money + 5;
console.log(money);

money = money + 5;
console.log(money);

money = money + 5;
console.log(money);

console.clear();

let greitukas = 13;
console.log(greitukas);

greitukas = greitukas + 3;
console.log(greitukas);

greitukas = 2 * greitukas - 1;
console.log(greitukas);

greitukas = greitukas % 10;
console.log(greitukas);

greitukas = greitukas ** 100;
console.log(greitukas);

console.clear();

let x = 1;

x = x + 1;
x += 2;
x -= 1;
x *= 10;
x /= 2;
x %= 4;
x **= 3;

console.log(x);

console.clear();

let y = 10;
y += 10 - 5;
y -= 5 * 4;
y += 5 + 5 * 4;

console.log(y);

console.log('-----------');

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai++; // same as makaronai += 1; or makaronai = makaronai + 1;
console.log(makaronai);

makaronai--;
console.log(makaronai);

++makaronai;
console.log(makaronai);

console.log('--------');

let g = 6;
console.log(g);
console.log(g++);
console.log(g);
console.log(++g);

/*
STRING

iniciavimas: ' (vienguba), " (dviguma)
*/

console.log('Test');

const firstName = 'Mindaugas';
console.log(firstName);

const lastName = "Ulonas";
console.log(lastName);

console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);

const sakinys = 'Welcom World!';
console.log(sakinys);

console.clear();

const kabutes1 = "printing ' symbol";
console.log(kabutes1);

const kabutes2 = 'printing " symbol';
console.log(kabutes2);

const kabutes3 = "Vienguba ' ir ";
const kabutes4 = 'Dviguba " kabutes';
const visosKabutes = kabutes3 + kabutes4;
console.log(visosKabutes);

const kabutes5 = "Viengubos ' ir" + ' ' + 'Dvigubos " kabutes';
console.log(kabutes5);

const kabutes6_1 = 'Vienguba (\') ir Dviguba (")';
console.log(kabutes6_1);

const kabutes6_2 = "Vienguba (') ir Dviguba (\")";
console.log(kabutes6_2);

console.clear();

/*
Uzduotis:
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta 90;
Pinigines turinys: 100;
*/

let pinigine = 0;

console.log('Pinigines turinys:', pinigine);

let papildymas = 10;
pinigine += papildymas;

console.log('Pinigine papildyta:', papildymas);
console.log('Pinigines turinys:', pinigine);

papildymas += 80;
pinigine += papildymas;

console.log('Pinigine papildyta:', papildymas);
console.log('Pinigines turinys:', pinigine);
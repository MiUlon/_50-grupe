/* 
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI:<, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {};
if () {} else {};
if () {} else if {} else {};
if () {} ... else if {} ... else {};
*/

console.log('Testing if IF script is working');
console.clear();

const age = 21;
const ageLimit = 18;

if (age < ageLimit) {
    console.log('Asmuo per jaunas');
} else {
    console.log('Asmuo gali ieiti');
};

console.log('---------------');

if (4 == 2) {
    console.log('Daugiau');
} else {
    console.log('Maziau');
};

console.log('---------------');

// variantas

const color = 'red';
let trasnlation = '';

if (color === 'red') {
    translation = 'Raudona';
} else if (color === 'blue') {
    translation = 'Melyna';
} else if (color === 'green') { 
    translation = 'Zalia';
} else {
    console.log('There are no correct color')
};

console.log('Spalva isvertus is anglu kalbos yra:' ,translation);

console.log('-------------');

function ifSalyga(number) {
    if (number === 1) {
        return 'one';
    } else if (number === 2) {
        return 'two'
    } else if (number === 3) {
        return 'three'
    } else {
        return 'number is unknown'
    }
};

console.log(ifSalyga(4));

console.log('------------');

const color1 = 'blue';
const color2 = 'black';
const color3 = 'red';
const color4 = 'purple';
const color5 = 'yellow';
const color6 = 'violet';
const color7 = 'green';
const color8 = 'white';

let translation1 = '';

function colorTranslation(color) {
    let = translation = '';

    if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === 'black') {
        translation = 'Juoda';
    } else if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'purple') {
        translation = 'Purpurine';
    } else if (color === 'yellow') {
        translation = 'Geltona';
    } else if (color === 'violet') {
        translation = 'Violetine';
    } else if (color === 'green') {
        translation = 'Zalia';
    } else if (color === 'white') {
        translation = 'Balta';
    } else {
        translation = 'Spalvos nera';
    }

    return color + ' -> ' + translation + ';';
};

console.log(colorTranslation('blue'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('purple'));
console.log(colorTranslation('yellow'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('white'));
/* 
UNARY - vienybe: a++, b--
BINARY - dvejybe: a + b
TERNARY - trejybe: a ? b : c
*/

let a = 0;

if (4 > 2) {
    a += 10;
} else {
    a -= 5;
};

console.log(`a = ${a}`);

const b = 4 < 2 ? 10 : 5;

console.log(`b = ${b}`);

console.clear();

const c = 1 + 2 > 3 ? 4 : 3;
console.log(`c = ${c}`);

const d = 1 + (2 > 3 ? 4 : 5);
console.log(`d = ${d}`);

const e = 2 > 3 ? 4 : 1 + 5;
console.log(`e = ${e}`);

const f = 'labas'.length > 0 ? 'Tekstas yra' : 'Teksto nera';
console.log(`f = ${f}`);

const g = 'pomidoras'[0] === 'p' ? '[0] = \'p\' raide' : '[0] = ne \'p\' raide';
console.log(g);

const h = 'pomidoras'[7 > 2 ? 1 : 2];
console.log(`h = ${h}`);

console.clear();

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const aj = 5;
const bj = 10;

const j = aj < bj ? diff(aj, bj) : sum(aj, bj);
console.log(`${aj} < ${bj} ??? ${j}`);

console.clear();

const n = -2;

const i = n >= 0 ? sum(n, n) : diff(n, 10);
console.log(i);

let ats = 0;

if (n >= 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
};

console.log(ats);

console.clear();

const text = 'labas'.length < 5 ? 'labas'[0] : 'labas'['labas'.length - 1];
console.log(text);

console.clear();

const firstLetter = text => text[0];
const lastLetter = text => text.at(-1);
const text2 = 'laba';

const text2Answer = text2.length < 5 ? firstLetter(text2) : lastLetter(text2);
console.log(text2Answer);

console.clear();

const functToCall = text2.length < 5 ? firstLetter : lastLetter;
const text2Answer2 = functToCall(text2);
console.log(text2Answer2);

console.clear();

const jonasMarks = [];
const maryteMarks = [10, 2, 8, 6, 4];

function emptyMarksArray() {
    return 'There are no marks';
};

function notEmptyMarksArray(marks) {
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };
    
    let avarage = sum / marks.length;

    return avarage;
};

const functionToCall = jonasMarks.length > 0 ? notEmptyMarksArray : emptyMarksArray;
const functionToCall2 = maryteMarks.length > 0 ? notEmptyMarksArray : emptyMarksArray;

console.log(functionToCall);
console.log(functionToCall2);

const jonasAnswer = functionToCall(jonasMarks);
const maryteAnswer = functionToCall2(maryteMarks);

console.log(jonasAnswer);
console.log(maryteAnswer);
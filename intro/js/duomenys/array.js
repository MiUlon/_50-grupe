/* 
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const emptyArray = [];
console.log(emptyArray);


const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const average1 = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log(average1);

console.log('-----------');

const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const avarege2 = sum2 / count2;

console.log('Suma:', sum2);
console.log('Kiekis:', count2);
console.log('Vidurkis', avarege2);

console.log('--------');

let sum3 = 0;
let index = 0;

sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];

console.log(sum3);

console.log('------------');

let jonoPazymiai = [];

function marksAvarage(marks) {
    if (marks.length === 0) {
        return 'Vidurkis: nera pazymiu.';
    };

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };

    return 'Vidurkis: ' + (sum / marks.length);
};

console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));

jonoPazymiai.push(4);
console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));

jonoPazymiai.push(6);
console.log(jonoPazymiai);
console.log(marksAvarage(jonoPazymiai));
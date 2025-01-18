/* 
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
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

console.clear();

const marks2 = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log('\n concat ------------------');
console.log([...marks2.concat(0)]); // adds value to end

console.log('\n copyWithin ------------------');
console.log([...marks2]);
console.log([...marks2].copyWithin(2, 0, 2)); // 

console.log('\n fill ------------------');
console.log([...marks2].fill(999)); // replace array values with value 999
console.log([...marks2].fill(999, 2)); // replace array values with value 999 starting with position 2
console.log([...marks2].fill(999, 1, 3)); // replace array values with value 999 starting with position 1 and ending with position 3

const oneHudredRabits = new Array(100).fill('zuikis');
console.log(oneHudredRabits);

console.log('\n flat ------------------');
console.log([1, 2, 3].flat());
console.log([1, [2, 4, 5], 3].flat()); // removes 1 level of array
console.log([1, [2, [4, 5]], 3].flat(2)); // removes 2 levels of array

console.log('\n includes ------------------');
console.log([...marks2].includes(10)); // returns ture if value exists in array or false if doesn't exists

console.log('\n indexOf ------------------');
console.log([...marks2].indexOf(2)); // if value exists in array then shows in which index. If value deosn't exists, return -1
console.log([...marks2].indexOf(10, 2)); // searching value 10 starting from position 2

console.log('\n join ------------------');
console.log(abc);
console.log([...abc].join()); // joins values to one
console.log([...abc].join('')); // joins values to one and removes comma
console.log([...abc].join(' xXx ')); // joins values to one and uses xXx instead of comma

console.log('\n keys ------------------');
console.log([...marks2].keys()); // mentor have no idea how to use it

console.log('\n lastIndexOf ------------------');
console.log([...marks2].lastIndexOf(10)); // returns last index of value 10, in this case returns 0
console.log([...marks2, 10].lastIndexOf(10)); // returns last index of value 10, in this case returns 5
console.log([...marks2].lastIndexOf(10, 3)); // returns last index of value 10, starts searching from position 3, in this case returns 0

console.log('\n pop ------------------');
const marks3 = [...marks2];
console.log(marks3.pop()); // returns 6 | returns last value of array and also removed that value

console.log('\n push ------------------');
const marks4 = [...marks2];
console.log(marks4);
console.log(marks4.push(7)); // adds new value to array end and returns new array length
console.log(marks4);

console.log('\n unshift ------------------');
const marks5 = [...marks2];
console.log(marks5.unshift(0)); // adds new value to array start and returns new array length
console.log(marks5);

console.log('\n shift ------------------');
const marks6 = [...marks2];
console.log(marks6);
console.log(marks6.shift()); // removes first array value and returs that value
console.log(marks6);

console.log('\n reverse ------------------');
console.log(marks2);
console.log([...marks2].reverse()); // returns reversed array

const demo = ['Labas', 'rytas', ',', 'Lietuva', '!'];
console.log(demo);
console.log(demo.reverse());


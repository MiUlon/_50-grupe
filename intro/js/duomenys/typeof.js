function empty() {

};

console.log(typeof 5); // number
console.log(typeof 3.1415); // number
console.log(typeof Infinity); // number
console.log(typeof 'text'); // string
console.log(typeof ''); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof ['a', 'b', 'c']); // object
console.log(typeof {}); // object
console.log(typeof empty); // function

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

if (12 === null) {
    console.log('Null');
} else {
    console.log('Not null');
};

console.clear();

const x = 5;
const y = 7;

if (typeof x !== 'number' || typeof y !== 'number') {
    console.log('X or Y is not number');
} else {
    console.log('X and Y are numbers');
};

// if (typeof x !== 'number') {
//     console.log('X is not number');
// } else if (typeof y !== 'number') {
//     console.log('Y is not number')
// } else {
//     console.log('X and Y are numbers')
// };
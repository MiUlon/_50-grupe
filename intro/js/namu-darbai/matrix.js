const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
};

console.clear();

const students = [
    [10, 9, 8, 7],
    [9, 9, 9, 9, 9],
    [7, 8, 9, 7, 8, 9, 7, 8, 9],
    [8, 8, 8, 8, 8, 8, 8],
];

console.log(students);
console.log('---------');
console.log(students[0]);
console.log('---------');

for (let i = 0; i < students.length; i++) {
    console.log(i, '-', students[i]);
};

console.log('---------');

const jonoPazymiai = students[0];
console.log(jonoPazymiai);

for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('Jonas', jonoPazymiai[i]);
};

console.log('---------');

const marytesPazymiai = students[1];
console.log(marytesPazymiai);

for (let i = 0; i < marytesPazymiai.length; i++) {
    console.log('Maryte', marytesPazymiai[i]);
};

console.clear();

console.log(students);
console.log('---------');
console.log(students[0]);
console.log('---------');
console.log(students[0][0]);
console.log('---------');
console.log(students[0][0][0]);

console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10],
        [11, 12, 13, [14, 15]],
    ],
];

console.log(gorila);
console.log('--------');
console.log(gorila[2]);
console.log('--------');
console.log(gorila[2][1]);
console.log('--------');
console.log(gorila[2][1][3]);
console.log('--------');
console.log(gorila[2][1][3][1]);
console.log('--------');
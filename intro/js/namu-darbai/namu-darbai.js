const number1 = 11;
console.log(number1);

const number2 = -5;
console.log(number2);

const number3 = 3.14;
console.log(number3);

const firstName = 'Mindaugas';
console.log(firstName);

const lastName = 'Ulonas';
console.log(lastName);

const middleName = 'None';
console.log(middleName);

const array1 = [3, 7, 1, 10, 19];
console.log(array1);

const array2 = ['Labas', 'rytas', 'Lietuva', 'oras', 'geras'];
console.log(array2);

const sum1 = number1 + number2 + number3;
console.log(sum1);

const stringSum1 = firstName + ' ' + middleName + ' ' + lastName + ' ';
console.log(stringSum1);

const arraySum1 = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(arraySum1);

const arraySum2 = array2[4] + ', ' + array2[3] + ', ' + array2[2] + ', ' + array2[1] + ', ' + array2[0];
console.log(arraySum2);

const number4 = 10;
const number5 = 15;

if (number4 > number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

if (number4 < number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

if (number4 === number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

if (number4 !== number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

if (number4 >= number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

if (number4 <= number5) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
};

console.log(firstName.length);
console.log(middleName.length);
console.log(lastName.length);

if (firstName.length > lastName.length) {
    console.log('FirstName is longer');
} else {
    console.log('LastName is londer');
};

if (firstName.length < lastName.length) {
    console.log('FirstName is shorter');
} else {
    console.log('SecondName is shorter');
};

if (firstName.length === lastName.length) {
    console.log('FirstName and LastName length is equal');
} else {
    console.log('FirstName and LastName length isn\'t equal')
};

if (firstName.length !== lastName.length) {
    console.log('FirstName and LastName length isn\'t equal');
} else {
    console.log('FirstName and LastName length is equal');
};

if (firstName.length >= lastName.length) {
    console.log('First name is longer or equal');
} else {
    console.log('LastName is longer or equal');
};

if (firstName.length <= lastName.length) {
    console.log('FirstName is shorter or equal');
} else {
    console.log('LastName is shoret or equal');
};

console.log(array2[0].length);
console.log(array2[1].length);
console.log(array2[2].length);
console.log(array2[3].length);
console.log(array2[4].length);

if (array2[0].length > array2[1].length) {
    console.log(array2[0] + 'is bigger then ' + array2[1]);
} else {
    console.log(array2[1] + ' is bigger then ' + array2[0]);
};

if (array2[0].length < array2[1].length) {
    console.log(array2[0] + 'is shorter then ' + array2[1]);
} else {
    console.log(array2[1] + ' is shorter then ' + array2[0]);
};

if (array2[0].length >= array2[1].length) {
    console.log(array2[0] + ' is bigger or equal to ' + array2[1]);
} else {
    console.log(array2[1] + ' is bigger or equal to ' + array2[0]);
};

if (array2[0].length <= array2[1].length) {
    console.log(array2[0] + ' is shorter or equal to ' + array2[1]);
} else {
    console.log(array2[1] + ' is shorter or equal to ' + array2[0]);
};

if (array2[0].length === array2[1].length) {
    console.log(array2[0] + ' length is equal to ' + array2[1]);
} else {
    console.log(array2[1] + ' length isn\'t equal to ' + array2[0]);
};

if (array2[0].length !== array2[1].length) {
    console.log(array2[0] + ' length isn\'t equal to ' + array2[1]);
} else {
    console.log(array2[1] + ' length is equal to ' + array2[0]);
};
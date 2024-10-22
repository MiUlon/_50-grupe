let sum1 = 0;

for (let i = 0; i <= 0; i++) {
    sum1 += i;
};

console.log(sum1);
console.log('------');

let sum2 = 0;

for (let i = 0; i <= 4; i++) {
    sum2 += i;
};

console.log(sum2);
console.log('------');

let sum3 = 0;

for (let i = 0; i <= 100; i++) {
    sum3 += i;
};

console.log(sum3);
console.log('------');

let sum4 = 0;

for (let i = 574; i <= 815; i++) {
    sum4 += i;
};

console.log(sum4);
console.log('------');

let sum5 = 0;

for (let i = -50; i <= 50; i++) {
    sum5 += i;
};

console.log(sum5);
console.log('------');

let sum6 = 0;

for (let i = -70; i <= 30; i++) {
    sum6 += i;
};

console.log(sum6);
console.log('------');

const textArray1 = ['a', 'b', 'c', 'd', 'e'];
let textArray1_2 = '';

for (let i = 0; i < textArray1.length; i++) {
    textArray1_2 += textArray1[i];
};

console.log(textArray1);
console.log(textArray1_2);

let textArray2 = [];

for (let i = 0; i < textArray1.length; i++) {
    textArray2 += textArray1[textArray1.length - 1 - i];
};

console.log(textArray2);

console.log('--------');

let count1 = 0;

for (let i = 0; i <= 11; i++) {

    if (i % 3 === 0) {
        count1++;
    };  
};

console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra', count1, 'vienetai');

let count2 = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        count2++;
    };
};

console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra', count2, 'vienetai');

let count3 = 0;

for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        count3++;
    };
};

console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra', count3, 'vienetai');

console.log('--------');

let count4 = 0;

for (let i = 0; i <= 11; i++) {

    if (i % 5 === 0) {
        count4++;
    };  
};

console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra', count4, 'vienetai');

let count5 = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 5 === 0) {
        count5++;
    };
};

console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra', count5, 'vienetai');

let count6 = 0;

for (let i = -18; i <= 18; i++) {
    if (i % 5 === 0) {
        count6++;
    };
};

console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra', count6, 'vienetai');

console.log('--------');

let count7 = 0;

for (let i = 0; i <= 11; i++) {

    if (i % 7 === 0) {
        count7++;
    };  
};

console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra', count7, 'vienetai');

let count8 = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 7 === 0) {
        count8++;
    };
};

console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra', count8, 'vienetai');

let count9 = 0;

for (let i = -18; i <= 18; i++) {
    if (i % 7 === 0) {
        count9++;
    };
};

console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra', count9, 'vienetai');

console.log('----------');

// 1 etapas

const n1 = 7;
const n2 = 5;
const n3 = 2;
const str1 = 'Labas';
const str2 = 'rytas';
const str3 = 'Lietuva';
const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 8, 7];
const students = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Mindaugas'];

// 2 etapas

const sum = n1 + n2 + n3;
console.log(sum);

const sentence = str1 + ' ' + str2 + ', ' + str3 + '!';
console.log(sentence);

const marksSum1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4];
console.log(marksSum1);

const marksSum2 = marks2[0] - marks2[1] + marks2[2];
console.log(marksSum2);

const studentsTotal = students[4] + ', ' + students[3] + ', ' + students[2] + ', ' + students[1] + ', ' + students[0];
console.log(studentsTotal);

// 3 etapas

console.log('----------');

function intervalSum(num1, num2) {
    let count10 = 0;

    for (let i = num1; i <= num2; i++) {
        count10 += i;
    };

    return count10;
};

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));

console.log('--------');

function reverseString(text) {
    let reverseText = '';

    // for (let i = 0; i < text.length; i++) {
    //     reverseText += text[text.length - 1 - i];
    // };

    // for (let i = 0; i < text.length; i++) {
    //     reverseText = text[i] + reverseText;
    // };

    // for (let i = text.length - 1; i >= 0; i--) {
    //     reverseText += text[i];
    // };

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText = text[text.length - 1 - i] + reverseText;
    };

    return reverseText;
};

console.log(reverseString('labas'));
console.log(reverseString('labukas'));

console.log('--------');

function numberCount(start, finish, step) {
    let answer = 0;

    for (let i = start; i <= finish; i++ ) {
        if (i % step === 0) {
            answer++;
        };
    };

    return answer;
};

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

console.clear();

function tusciaFunkcija() {
    return false;
};

console.log(tusciaFunkcija());

console.clear();

function multiply(number1, number2) {
    if (typeof number1 !== 'number') {
        return 'First variable  is not a number'
    };

    if (typeof number2 !== 'number') {
        return 'Second variable  is not a number'
    };
    const sum = number1 * number2;

    return sum;
};

console.log(multiply(5, 6));
console.log(multiply(7, 6));
console.log(multiply(5, 7));

console.clear();

function countSymbolsInNumber(number) {
    if (typeof number !== 'number') {
        return 'Provided value is not a number'
    };

    let count = 0;

    for (let i = 0; i < number; i++) {
        number %=  10
        count++;
    };

    return count;
};

console.log(countSymbolsInNumber('labas'));
console.log(countSymbolsInNumber(1));
console.log(countSymbolsInNumber(12));
console.log(countSymbolsInNumber(123));
console.log(countSymbolsInNumber([1, 2, 3]));

console.log('------');

function countSymbolsInNumber2(number) {
    if (typeof number !== 'number') {
        return 'Provided value is not a number';
    } else if (number.toString() === NaN.toString()) {
        return 'Provided value is not a number';
    };

    const numberAsText = '' + number;

    if (number % 1 !== 0 && number < 0) {
        return numberAsText.length - 2;
    } else if (number % 1 !== 0 || number < 0) {
        return numberAsText.length - 1;
    };

    return numberAsText.length;
};

console.log('Not number', countSymbolsInNumber2('labas'));
console.log('1', countSymbolsInNumber2(1));
console.log('2', countSymbolsInNumber2(12));
console.log('3', countSymbolsInNumber2(123));
console.log('Not number', countSymbolsInNumber2([1, 2, 3]));
console.log('Not number', countSymbolsInNumber2(NaN));
console.log('Not number', countSymbolsInNumber2(true));
console.log('5', countSymbolsInNumber2(3.1415));
console.log('3', countSymbolsInNumber2(-100));
console.log('5', countSymbolsInNumber2(-100.12));

console.log('-----')

function countSymbolsInNumber3(number) {
    const numberAsText = '' + number;
    let size = numberAsText.length;
    
    if (typeof number !== 'number') {
        return 'Value is not number';
    };
    
    if (isNaN(number)) {
        return 'Value is not number';
    };

    if (numberAsText === 'Infinity' || numberAsText === '-Infinity') {
        return 'Value is not number';
    };
    
    if (number % 1 !== 0) {
        size--;
    };

    if (number < 0) {
        size--;
    };

    return size;
};

console.log(countSymbolsInNumber3('labas'));
console.log(countSymbolsInNumber3(1));
console.log(countSymbolsInNumber3(12));
console.log(countSymbolsInNumber3(123));
console.log(countSymbolsInNumber3([1, 2, 3]));
console.log(countSymbolsInNumber3(NaN));
console.log(countSymbolsInNumber3(true));
console.log(countSymbolsInNumber3(3.1415));
console.log(countSymbolsInNumber3(-100));
console.log(countSymbolsInNumber3(-100.12));
console.log(countSymbolsInNumber3(-0));
console.log(countSymbolsInNumber3(Infinity));
console.log(countSymbolsInNumber3(-Infinity));
console.log(countSymbolsInNumber3());
console.log(countSymbolsInNumber3(''));
console.log(countSymbolsInNumber3([]));
console.log(countSymbolsInNumber3([1, 2]));
console.log(countSymbolsInNumber3(['labas', 'rytas']));
console.log(countSymbolsInNumber3(undefined));
console.log(countSymbolsInNumber3(null));
console.log(countSymbolsInNumber3(countSymbolsInNumber3));

console.log('-------');

function countSymbolsInNumber4(number) {
    if (!Number.isFinite(number)) {
        return 'Value is not number';
    } else {
        const numberAsText = '' + number;
        let size = numberAsText.length;
        
        if (number % 1 !== 0) {
            size--;
        };
    
        if (number < 0) {
            size--;
        };

        return size;
    };
};

console.log(countSymbolsInNumber4('labas'));
console.log(countSymbolsInNumber4(1));
console.log(countSymbolsInNumber4(12));
console.log(countSymbolsInNumber4(123));
console.log(countSymbolsInNumber4([1, 2, 3]));
console.log(countSymbolsInNumber4(NaN));
console.log(countSymbolsInNumber4(true));
console.log(countSymbolsInNumber4(3.1415));
console.log(countSymbolsInNumber4(-100));
console.log(countSymbolsInNumber4(-100.12));
console.log(countSymbolsInNumber4(-0));
console.log(countSymbolsInNumber4(Infinity));
console.log(countSymbolsInNumber4(-Infinity));
console.log(countSymbolsInNumber4());
console.log(countSymbolsInNumber4(''));
console.log(countSymbolsInNumber4([]));
console.log(countSymbolsInNumber4([1, 2]));
console.log(countSymbolsInNumber4(['labas', 'rytas']));
console.log(countSymbolsInNumber4(undefined));
console.log(countSymbolsInNumber4(null));
console.log(countSymbolsInNumber4(countSymbolsInNumber4));
console.log(countSymbolsInNumber4(1e2));
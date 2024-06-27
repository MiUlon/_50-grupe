/*
FUNCTION - funkcija, perpanaudojima logika;
() - parameters block;
{} - logick block;

Input => function() => output
*/

console.log('Test to see if function test working');

function functionName() {

};

const testFunction = functionName();

console.log(testFunction);

function empty() {
    return undefined;
};

console.log(empty());

function giveMeFive() {
    return 5;
};

function giveMeSix() {
    return 6;
};

console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
name: Jonas
surename: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis
*/

/* 
Inout:
- pirmas skaicius: 5
- antras skaicius: 7

Output:
- 35
*/

function giveMeName() {
    const firstName = 'Jonas';
    const lastName = 'Jonaitis';
    const welcomeText = 'Laba diena, as esu';
    const fullText = welcomeText + ' ' + firstName + ' ' + lastName + '!';

    return fullText;
};

console.log(giveMeName());

function giveMeMultipleSum() {
    const firstNumber = 5;
    const secondNumber = 7;
    const sum = firstNumber * secondNumber;

    return sum;
};

console.log(giveMeMultipleSum());

function intro(welcomeText, firstName, lastName) {
    return welcomeText + ' ' + firstName + ' ' + lastName + '!';
};

console.log(intro('Laba diena, as esu', 'Jonas', 'Jonaitis'));

function intro2(firstName, lastName) {
 return 'Laba diena, as esu' + ' ' + firstName + ' ' + lastName + '!';
};

console.log(intro2('Jonas', 'Jonaitis'));

function sum(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

console.log(sum(5, 7));
console.log(sum(-2, 8));
console.log(sum(3.14, 9));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus

function iLike(name, year, whatLikes) {
    return 'Mano vardas yra' + ' ' + name + ', man' + ' ' + year + ' ' + 'metai ir as megstu' + ' ' + whatLikes + '.';
};

console.log(iLike('Jonas', 99, 'cepelinus'));

console.log('-----------------');

function price(value) {
    const pvm = 21;
    const priceIncrease = 1 + pvm / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
};

console.log(price(100));
console.log(price(150));

console.log('-----------------');

function words(word1, word2, word3) {
    let sentence = 'Dictionary: ';
    sentence += word1;
    sentence += ', ';
    sentence += word2;
    sentence += ', ';
    sentence += word3;
    sentence += '.';

    return sentence;
};

console.log(words('labas', 'rytas', 'Lietuva'));
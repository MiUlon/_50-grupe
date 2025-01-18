/* 
Destrukturizavimas
gimininga "siela" - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log('Full array:', a);
console.log('First value:', first);
console.log('Second value', second);
console.log('All rest values:', rest);

console.clear();

const b = [10, 2];
const firstB = b[0];
const secondB = b[1];
const restB = b.slice(2);

console.log('Full array:', b);
console.log('First value:', firstB);
console.log('Second value:', secondB);
console.log('All rest values:', restB);

console.clear();

const dictionary = ['labas', 'rytas', 'Lietuva', 'tau', 'sakau'];
const [word1] = dictionary;
const [word2, word3] = dictionary;
const [word4, word5, word6, ...restOfWords] = dictionary;

console.log(word1);
console.log(word2, word3);
console.log(word4, word5, word6);
console.log(restOfWords);

console.clear();

function giveMeTwoNumbers() {
    const a = Math.ceil(Math.random() * 48);
    const b = Math.ceil(Math.random() * 48);

    return [a, b];
};

const res1 = giveMeTwoNumbers();
const res2 = giveMeTwoNumbers();
const res3 = giveMeTwoNumbers();

console.log(res1, res1[0] + res1[1]);
console.log(res2, res2[0] + res2[1]);

const [n1, n2] = res3;

console.log(res3, n1 + n2);

const [n3, n4] = giveMeTwoNumbers();

console.log(n3, n4, n3 + n4);

console.clear();

const person = {
    color: 'red',
    name: 'One',
    age: 66,
    isMarried: true,
};

const userName = person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;

console.log(person);
console.log(userName);
console.log(userAge);
console.log(userIsMarried);

const { age, name, ...restPersonInfo } = person;
console.log(age);
console.log(name);
console.log(restPersonInfo);

console.clear();

function food() {
    const foodList = [
        {
            title: 'cepelinai',
            count: 2,
        },
        {
            title: 'saltibarsciai',
            count: 1,
        },
        {
            title: 'svogunu laiskai',
            count: 10,
        },
    ];

    return foodList[Math.floor(Math.random() * foodList.length)];
};

const { title: title1, count: count1 } = food();
const sentence1 = `Valgysi: ${title1}; Kiekis: ${count1}.`;
console.log(sentence1);

const { title: title2, count: count2 } = food();
const sentence2 = `Valgysi: ${title2}; Kiekis: ${count2}.`;
console.log(sentence2);

const { title: title3, count: count3 } = food();
const sentence3 = `Valgysi: ${title3}; Kiekis: ${count3}.`;
console.log(sentence3);
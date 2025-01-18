/* 
Spread operatorius
Destrukturizavimas
*/

// value by reference
const a = [1, 2, 3];
const b = a;

console.log('a:', a);
console.log('b:', b);

a[0] = 44;

console.log('a:', a);
console.log('b:', b);

b[2] = 777;

console.log('a:', a);
console.log('b:', b);

console.clear();

let c = 7;
let d = c;

console.log('c:', c);
console.log('d:', d);

c += 5;

console.log('c:', c);
console.log('d:', d);

d += 3;

console.log('c:', c);
console.log('d:', d);

// ...spread array

const e = [1, 2, 3];
const f = [...e];

console.log('e:', e);
console.log('f:', f);

e[0] = 11;

console.log('e:', e);
console.log('f:', f);

f[2] = 33;

console.log('e:', e);
console.log('f:', f);

const g = [...e, 4];

console.log('e:', e);
console.log('g:', g);

const h = [0, ...e, 4, 5];

console.log('e:', e);
console.log('h:', h);

const i = [...e, ...e];

console.log('e:', e);
console.log('i:', i);

console.clear();

// ...spread object

const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1;

console.log('obj1:', obj1);
console.log('obj2:', obj2);

obj1.name = 'Maryte';

console.log('obj1:', obj1);
console.log('obj2:', obj2);

obj2.age = 88;

console.log('obj1:', obj1);
console.log('obj2:', obj2);

const obj3 = {...obj1};

console.log('obj1:', obj1);
console.log('obj3:', obj3);

obj1.name = 'Petras';
obj3.age = 77;

console.log('obj1:', obj1);
console.log('obj3:', obj3);

console.clear();

const person = {
    name: 'Petras',
    age: 77,
};

const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
};

const fullPersonInformation = { 
    ...person, 
    ...address,
    id: 111,
    phone: 6215888,
};

console.log(person);
console.log(address);
console.log(fullPersonInformation);
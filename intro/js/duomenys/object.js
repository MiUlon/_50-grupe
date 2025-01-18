/* 
OBJECT - objektas
*/

const empty = {};
console.log(empty);

const student1Name = 'Jonas';
const student1Age = 99;
const student1IsMarried = true;

const student2Name = 'Maryte';
const student2Age = 88;
const student2IsMarried = false;

const student3Name = 'Petras';
const student3Age = 77;
const student3IsMarried = false;

const student4Name = 'One';
const student4Age = 66;
const student4IsMarried = true;

const stud1 = ['Jonas', 99, true];
const stud2 = ['Maryte', 88, false];
const stud3 = ['Petras', 77, false];
const stud4 = ['Ona', 66, true];

console.log('Age of Maryte is', stud2[1]);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

const student3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
};

const student4 = {
    name: 'One',
    age: 66,
    isMarried: true,
};

console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.isMarried);

const studentsList = [
    {
        name: {
            firstName: 'firstName1',
            lastName: 'lastName1'
        },
        age: 99,
        isMarried: true,
    },
    {
        name: 'Name2',
        age: 88,
        isMarried: false,
    },
    {
        name: 'Name3',
        age: 77,
        isMarried: false,
    },
    {
        name: 'Name4',
        age: 66,
        isMarried: true,
    },
    {
        name: 'Name5',
        age: 55,
        isMarried: NaN
    },
];

for (let i = 0; i < studentsList.length; i++) {
    console.log(studentsList[i].name);
};

console.log('Last student in the list:', studentsList[studentsList.length - 1]);
console.log('Last student in the list', studentsList.at(-1));
console.log('Last student in the list name is', studentsList.at(-1).name);
console.log('First and last names:', studentsList[0].name);
console.log('FirstName:', studentsList[0].name.firstName);
console.log('LastName:', studentsList[0].name.lastName);

console.clear();

const studentsList2 = [
    {
        name: 'Name1',
        age: 99,
        isMarried: true,
    },
    {
        name: 'Name2',
        age: 88,
        isMarried: false,
    },
    {
        name: 'Name3',
        age: 77,
        isMarried: false,
    },
    {
        name: 'Name4',
        age: 66,
        isMarried: true,
    },
];

function introduceYourself(studentData) {
    return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir ${studentData.isMarried ? 'esu' : 'nesu'} vedes.`;
};

for (let i = 0; i < studentsList2.length; i++) {
    console.log(introduceYourself(studentsList2[i]));
};

console.clear();


function test(a, b) {
    const d = a;
    const e = b;
    const f = {a: 'Jonas', b: 'Petras', c: 'Antanas'};
    const g = {a: 'Jonaitins', b: 'Petraitis', c: 'Antanaitis'};
    
    return f.d, g.e;
};

console.log(test('TestA', 'TestB'));

console.clear();


const person = {
    name: 'personName',
    age: 55,
    isMarried: false,
};

// Supaprastinta objekto sintakse

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

// Standartine objekto sintakse

console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// differs

const key = 'age';

console.log(person.key); // undefined
console.log(person[key]); // 55

console.clear();

function giveMe(data, key) {
    return data[key];
};

console.log(giveMe({name: 'Jonas', age: 99}, 'name'));
console.log(giveMe({name: 'Jonas', age: 99}, 'age'));
console.log(giveMe({name: 'Jonas', age: 99}, 'isMarried'));
console.log(giveMe({title: 'Greiti ir isiute', page: 1, size: 10}, 'title'));
console.log(giveMe({title: 'Greiti ir isiute 2', page: 2, size: 10}, 'page'));
console.log(giveMe({title: 'Greiti ir isiute 3', page: 2, size: 10}, 'size'));
console.log(giveMe({title: 'Greiti ir isiute 3', page: 2, size: 10}, 'xxx'));
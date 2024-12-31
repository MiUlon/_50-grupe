/*
STRING

iniciavimas: ' (vienguba), " (dviguma), ` (backtick)
*/

console.log('Test');

const firstName = 'Mindaugas';
console.log(firstName);

const lastName = "Ulonas";
console.log(lastName);

console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);

const sakinys = 'Welcom World!';
console.log(sakinys);

console.clear();

const kabutes1 = "printing ' symbol";
console.log(kabutes1);

const kabutes2 = 'printing " symbol';
console.log(kabutes2);

const kabutes3 = "Vienguba ' ir ";
const kabutes4 = 'Dviguba " kabutes';
const visosKabutes = kabutes3 + kabutes4;
console.log(visosKabutes);

const kabutes5 = "Viengubos ' ir" + ' ' + 'Dvigubos " kabutes';
console.log(kabutes5);

const kabutes6_1 = 'Vienguba (\') ir Dviguba (")';
console.log(kabutes6_1);

const kabutes6_2 = "Vienguba (') ir Dviguba (\")";
console.log(kabutes6_2);

console.clear();

/*
Uzduotis:
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta 90;
Pinigines turinys: 100;
*/

let pinigine = 0;

console.log('Pinigines turinys:', pinigine);

let papildymas = 10;
pinigine += papildymas;

console.log('Pinigine papildyta:', papildymas);
console.log('Pinigines turinys:', pinigine);

papildymas += 80;
pinigine += papildymas;

console.log('Pinigine papildyta:', papildymas);
console.log('Pinigines turinys:', pinigine);

console.clear();

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

console.log('<header>');
console.log('    <img>');
console.log('    <nav>');
console.log('        <a></a>');
console.log('        <a></a>');
console.log('        <a></a>');
console.log('    </nav>');
console.log('</header>');

console.clear();

// \r - return
// \n - new line
// \t - tab

const HTML = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';

console.log(HTML);

console.clear();

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtick (\`) kabute`;
console.log(backtick1);

const backtick2 = 'Backtick (`) kabute';
console.log(backtick2);

const HTML2 = `
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
`;

console.log(HTML2);

const a = 5;
const b = 7;
const c = a + b;

// print: 5 + 7 = 12

console.log(a + ` + ` + b + ` = ` + c);

console.log(`${a} + ${b} = ${c}`);

console.clear();

const start = 0;
const end = 10;

const text = 'Prasidejo nuo ' + start + ', o pasibaige ' + end + '.';
console.log(text);

const text2 = `Prasidejo nuo ${start}, o pasibaige ${end}.`;
console.log(text2);

console.clear();
console.log('Labas' * 'rytas');
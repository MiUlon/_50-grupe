/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log('Number.isFinite()'); // checks if value is number
console.log(Number.isFinite(12));
console.log(Number.isFinite(-12));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(0));
console.log(Number.isFinite(null));
console.log(Number.isFinite(NaN));

console.log('-------------');

console.log('isFinite()'); // checks if value is number (fails for null and 'null')
console.log(isFinite(12));
console.log(isFinite(-12));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(0));
console.log(isFinite(null));
console.log(isFinite(NaN));

console.log('-------------');

console.log('isNaN()'); // catch NaN value
console.log(isNaN(12));
console.log(isNaN(-12));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(0));
console.log(isNaN(null));
console.log(isNaN(NaN));

console.log('-------------');

console.log('parseInt()'); // converts text to integer
console.log(parseInt('87'));
console.log(parseInt('-99'));
console.log(parseInt('test'));

const a = '87';
const b = parseInt(a);
console.log(typeof a);
console.log(typeof b);

console.log(parseInt('87.87'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity'));
console.log(parseInt('-Infinity'));
console.log(parseInt('text'));
console.log(parseInt('[]'));
console.log(parseInt('[1, 2, 3]'));
console.log(parseInt(''));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('123abc123'));
console.log(parseInt('1234e5'));
console.log(parseInt('1.23abc123'));

console.log('-------------');

console.log('parseFloat()'); // converts text to float number
console.log(parseFloat('15'));
console.log(parseFloat('15.15'));
console.log(parseFloat('-15.15'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('NaN'));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('123abc123'));
console.log(parseFloat('1234e5'));
console.log(parseFloat('1.23abc123'));
console.log(parseFloat('7e5'));
console.log(parseFloat('text'));

console.log('-------------');

console.log('Number.toFixed()'); // makes float number

const c = 5;
console.log(c.toFixed(2));

const d = 3.14;
console.log(d.toFixed(3));

const e = '3.141516';
console.log(e);
console.log(parseFloat(e));
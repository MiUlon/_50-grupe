/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log(word[0]);

console.log('---------------');

// chartAt()
console.log('charAt()');
console.log(word.charAt(0));

console.log('---------------');

//charCodeAt()
console.log('chartCodeAt()');
console.log(word.charCodeAt(0));

console.log('---------------');

// concat()
const word2 = 'Labas';
const word3 = 'rytas';
const word4 = 'Lietuva';
console.log('concat()');
console.log(word2.concat(word3, word4));

console.log('---------------');

// endsWith()
console.log('endsWith()');
console.log('Labas'.endsWith('x')); // false
console.log('Labas'.endsWith('s')); // true
console.log('Labas'.endsWith('as')); // true
console.log('Labas'.endsWith('Labas')); // true

console.log('---------------');

// startsWith()
console.log('startsWith()');
console.log('Labas'.startsWith('x')); // false
console.log('Labas'.startsWith('L')); // true
console.log('Labas'.startsWith('La')); // true

console.log('---------------');

// includes()
console.log('includes()');
console.log('Labas'.includes('xz')); // false
console.log('Labas'.includes('ab'));

console.log('---------------');

// indexOf()
console.log('indexOf()');
console.log('Labas'.indexOf('b')); // 2
console.log('Labas'.indexOf('a')); // 1
console.log('Labas'.indexOf('ba')); // 2
console.log('Labas'.indexOf('x')); // -1

console.log('---------------');

// repeat()
console.log('repeat()');
console.log('a'.repeat(5));
console.log('Labas'.repeat(10));
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(undefined));
console.log('Labas'.repeat(null));
console.log('Labas'.repeat(3.14)); // 3
console.log('Labas'.repeat(3.87)); // 3

console.log('---------------');

// replace()
console.log('replace()');
console.log('Labas'.replace('aba', 'cbc'));
console.log('Labas'.replace('a', '_'));
console.log('Labas'.replace('a', '_').replace('a', '_'));

console.log('---------------');

// replaceAll();
console.log('replaceAll()');
console.log('Labas'.replaceAll('a', '_'));

console.log('---------------');

// slice()
console.log('slice()');
console.log('Labas'.slice(2)); // bas
console.log('Labas'.slice(1, 4)); // aba
console.log('Labas'.slice(0, 3)); //Lab
console.log('Labas'.slice(-3)); // bas

console.log('---------------');

// split()
console.log('split()');
console.log('Labas'.split('aba')); // [ 'L', 's' ]
console.log('Labas rytas, Lietuva!'.split(' ')); // [ 'Labas', 'rytas,', 'Lietuva!' ]
console.log('Labas'.split('s')); // [ 'Laba', '' ]
console.log('Labas'.split('')); // [ 'L', 'a', 'b', 'a', 's' ]

console.log('---------------');

// toLowerCase()
console.log('toLowerCase()');
console.log('LABAS'.toLowerCase()); // labas

console.log('---------------');

// toUpperCase()
console.log('toUpperCase()');
console.log('labas'.toUpperCase()); // LABAS

console.log('---------------');

// trim()
console.log('trim()');
console.log('   L a b a s');
console.log('"' + '   L a b a s    '.trim() + '"'); // removes spaces at the beginning or end: result "L a b a s"

console.log('---------------');

// trimEnd()
console.log('trimEnd()');
console.log('   L a b a s      ');
console.log('   L a b a s       '.trimEnd()); // removes spaces at the end

console.log('---------------');

// trimStart()
console.log('trimStart()');
console.log('   L a b a s      ');
console.log('   L a b a s       '.trimStart()); // removes spaces at the beginning

console.log('---------------');

const text = 'Labas rytas, Lietuva!';
const correctText = text.replace(',', '').replace('!', '').split(' ');
console.log(correctText);
const newText = correctText[0] + ' ' + correctText[1] + ' ' + correctText[2];
console.log(newText);
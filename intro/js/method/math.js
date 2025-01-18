/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log('\nAbs --------------');
console.log(Math.abs(7)); // 7
console.log(Math.abs(-7)); // 7

console.log('\nCbrt  --------------');
console.log(Math.cbrt(27)); // 3

console.log('\nCeil  --------------');
console.log(Math.ceil(10)); // 10
console.log(Math.ceil(3.14)); // 4
console.log(Math.ceil(-3.14)); // -3

console.log('\nFloor  --------------');
console.log(Math.floor(10)); // 10
console.log(Math.floor(3.14)); // 3
console.log(Math.floor(-3.14)); // -4

console.log('\nRound  --------------');
console.log(Math.round(10)); // 10
console.log(Math.round(3.14)); // 3
console.log(Math.round(-3.14)); // -3
console.log(Math.round(3.54)); // 4
console.log(Math.round(-3.54)); // -4
console.log(Math.round(3.00001)); // 3
console.log(Math.round(3.49999)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.50001)); // 4
console.log(Math.round(3.99999)); // 4
console.log(Math.round(-3.00001)); // -3
console.log(Math.round(-3.49999)); // -3
console.log(Math.round(-3.5)); // -3
console.log(Math.round(-3.50001)); // -4
console.log(Math.round(-3.99999)); // -4

console.log('\nTrunc  --------------');
console.log(Math.trunc(10)); // 10
console.log(Math.trunc(3.14)); // 3
console.log(Math.trunc(-3.14)); // -3
console.log(Math.trunc(3.00001)); // 3
console.log(Math.trunc(3.49999)); // 3
console.log(Math.trunc(3.5)); // 3
console.log(Math.trunc(3.50001)); // 3
console.log(Math.trunc(3.99999)); // 3

console.log('\nFround  --------------');
console.log(Math.fround(10)); // 10
console.log(Math.fround(0)); // 0
console.log(Math.fround(-5)); // -5
console.log(Math.fround(3.1415)); // 3.1414999961853027
console.log(Math.fround(-3.1415)); // -3.1414999961853027
console.log(Math.fround(0.1)); // 0.10000000149011612
console.log(Math.fround(-0.1)); // -0.10000000149011612

console.log('\nHypot  --------------');
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(1, 1, 1, 1)); // 2

console.log('\nImul  --------------');
console.log(Math.imul(10, 17)); // 170

console.log('\nMax  --------------');
console.log(Math.max(10, 17)); // 17
console.log(Math.max(-1, -3)); // -1
console.log(Math.max(-1, -3, 7, 10, 3.14)); // 10

console.log('\nMin  --------------');
console.log(Math.min(10, 17)); // 10
console.log(Math.min(-1, -3)); // -3
console.log(Math.min(-1, -3, 7, 10, 3.14)); // -3

console.log('\nPow  --------------');
console.log(Math.pow(2, 3)); // 8

console.log('\nRandom  --------------');
console.log(Math.random()); // 
console.log(Math.random()); // 
console.log(Math.random()); // 
console.log(Math.random()); // 
console.log(Math.random()); // 
console.log(Math.random()); // 
console.log(Math.random()); // 

console.log('\nSign  --------------');
console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0.5)); // 1
console.log(Math.sign(-0.5)); // -1
console.log(Math.sign(Infinity)); // 1
console.log(Math.sign(-Infinity)); // -1
console.log(Math.sign(NaN)); // NaN

console.log('\nSqrt  --------------');
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(16)); // 4
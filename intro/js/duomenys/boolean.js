/*
BOOLEAN - logine reiksme

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! not
*/

console.log('Testing Boolean test');

const userName = 'Jonas';
const age = 31;
const isSunShining = true;
const hasFuel = false;

console.log('Sun:', isSunShining, 'Fuel:', hasFuel);

console.log('KAIP NENAUDOTI: (true + true: 1 + 1)', true + true);
console.log('KAIP NENAUDOTI: (true + false: 1 + 0)', true + false);

console.log('-------------------');

console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);

const hasMoney = true;
const isOlderThan20 = false;

console.log('Has enough money to buy alcohol:', hasMoney, 'Older than 20 years old?', isOlderThan20, 'Can buy alcohol?', hasMoney && isOlderThan20);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = false;
const isYoung = false;
const isRich = false;

const willIGoTo = isBeautiful && isYoung && isRich;

console.log('Grazus:', isBeautiful, 'Jaunas:', isYoung, 'Turtingas:', isRich);
console.log('Ar mergina eis i pasimatyma:', willIGoTo);

console.log('-------------------');

//VAIKINAS

const willIGoToMale = isBeautiful || isYoung || isRich;
console.log('Grazi:', isBeautiful, 'Jauna:', isYoung, 'Turtinga:', isRich);
console.log('Ar vaikinas eis i pasimatyma:', willIGoToMale);

console.log('---------------------');

console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);

console.log('true && true || false', true && true || false);
console.log('true && false || false:', true && false || false);

console.log(!true);
console.log(!false);

const tiesa = true;
console.log(!tiesa);

console.log('---------------------');

// israsyti visus imanomus variantus: 128

console.log('1. true && true && true && true', true && true && true && true);
console.log('2. true && true && true && false', true && true && true && false);
console.log('3. true && true && false && true', true && true && false && true);
console.log('4. true && false && true && true', true && false && true && true);
console.log('5. false && true && true && true', false && true && true && true);
console.log('6. true && true && false && false', true && true && false && false);
console.log('7. true && false && false && true', true && false && false && true);
console.log('8. false && false && true && true', false && false && true && true);
console.log('9. true && false && true && false', true && false && true && false);
console.log('10. false && true && true && false', false && true && true && false);
console.log('11. false && true && false && true', false && true && false && true);
console.log('12. true && false && false && false', true && false && false && false);
console.log('13. false && false && false && true', false && false && false && true);
console.log('14. false && false && false && false', false && false && false && false);
console.log('15. false && true && false && false', false && true && false && false);
console.log('16. false && false && true && false', false && false && true && false);

console.log('-------------------');

console.log('17. true && true && true || true', true && true && true || true);
console.log('18. true && true && true || false', true && true && true || false);
console.log('19. true && true && false || true', true && true && false || true);
console.log('20. true && false && true || true', true && false && true || true);
console.log('21. false && true && true || true', false && true && true || true);
console.log('22. true && true && false || false', true && true && false || false);
console.log('23. true && false && false || true', true && false && false || true);
console.log('24. false && false && true || true', false && false && true || true);
console.log('25. true && false && true || false', true && false && true || false);
console.log('26. false && true && true || false', false && true && true || false);
console.log('27. false && true && false || true', false && true && false || true);
console.log('28. true && false && false || false', true && false && false || false);
console.log('29. false && false && false || true', false && false && false || true);
console.log('30. false && false && false || false', false && false && false || false);
console.log('31. false && true && false || false', false && true && false || false);
console.log('32. false && false && true || false', false && false && true || false);

console.log('-------------------');

console.log('33. true && true || true && true', true && true || true && true);
console.log('34. true && true || true && false', true && true || true && false);
console.log('35. true && true || false && true', true && true || false && true);
console.log('36. true && false || true && true', true && false || true && true);
console.log('37. false && true || true && true', false && true || true && true);
console.log('38. true && true || false && false', true && true || false && false);
console.log('39. true && false || false && true', true && false || false && true);
console.log('40. false && false || true && true', false && false || true && true);
console.log('41. true && false || true && false', true && false || true && false);
console.log('42. false && true || true && false', false && true || true && false);
console.log('43. false && true || false && true', false && true || false && true);
console.log('44. true && false || false && false', true && false || false && false);
console.log('45. false && false || false && true', false && false || false && true);
console.log('46. false && false || false && false', false && false || false && false);
console.log('47. false && true || false && false', false && true || false && false);
console.log('48. false && false || true && false', false && false || true && false);

console.log('-------------------');

console.log('49. true || true && true && true', true || true && true && true);
console.log('50. true || true && true && false', true || true && true && false);
console.log('51. true || true && false && true', true || true && false && true);
console.log('52. true || false && true && true', true || false && true && true);
console.log('53. false || true && true && true', false || true && true && true);
console.log('54. true || true && false && false', true || true && false && false);
console.log('55. true || false && false && true', true || false && false && true);
console.log('56. false || false && true && true', false || false && true && true);
console.log('57. true || false && true && false', true || false && true && false);
console.log('58. false || true && true && false', false || true && true && false);
console.log('59. false || true && false && true', false || true && false && true);
console.log('60. true || false && false && false', true || false && false && false);
console.log('61. false || false && false && true', false || false && false && true);
console.log('62. false || false && false && false', false || false && false && false);
console.log('63. false || true && false && false', false || true && false && false);
console.log('64. false || false && true && false', false || false && true && false);

console.log('-------------------');

console.log('65. true && true || true || true', true && true || true || true);
console.log('66. true && true || true || false', true && true || true || false);
console.log('67. true && true || false || true', true && true || false || true);
console.log('68. true && false || true || true', true && false || true || true);
console.log('69. false && true || true || true', false && true || true || true);
console.log('70. true && true || false || false', true && true || false || false);
console.log('71. true && false || false || true', true && false || false || true);
console.log('72. false && false || true || true', false && false || true || true);
console.log('73. true && false || true || false', true && false || true || false);
console.log('74. false && true || true || false', false && true || true || false);
console.log('75. false && true || false || true', false && true || false || true);
console.log('76. true && false || false || false', true && false || false || false);
console.log('77. false && false || false || true', false && false || false || true);
console.log('78. false && false || false || false', false && false || false || false);
console.log('79. false && true || false || false', false && true || false || false);
console.log('80. false && false || true || false', false && false || true || false);

console.log('-------------------');

console.log('81. true || true && true || true', true || true && true || true);
console.log('82. true || true && true || false', true || true && true || false);
console.log('83. true || true && false || true', true || true && false || true);
console.log('84. true || false && true || true', true || false && true || true);
console.log('85. false || true && true || true', false || true && true || true);
console.log('86. true || true && false || false', true || true && false || false);
console.log('87. true || false && false || true', true || false && false || true);
console.log('88. false || false && true || true', false || false && true || true);
console.log('89. true || false && true || false', true || false && true || false);
console.log('90. false || true && true || false', false || true && true || false);
console.log('91. false || true && false || true', false || true && false || true);
console.log('92. true || false && false || false', true || false && false || false);
console.log('93. false || false && false || true', false || false && false || true);
console.log('94. false || false && false || false', false || false && false || false);
console.log('95. false || true && false || false', false || true && false || false);
console.log('96. false || false && true || false', false || false && true || false);

console.log('-------------------');

console.log('97. true || true || true && true', true || true || true && true);
console.log('98. true || true || true && false', true || true || true && false);
console.log('99. true || true || false && true', true || true || false && true);
console.log('100. true || false || true && true', true || false || true && true);
console.log('101. false || true || true && true', false || true || true && true);
console.log('102. true || true || false && false', true || true || false && false);
console.log('103. true || false || false && true', true || false || false && true);
console.log('104. false || false || true && true', false || false || true && true);
console.log('105. true || false || true && false', true || false || true && false);
console.log('106. false || true || true && false', false || true || true && false);
console.log('107. false || true || false && true', false || true || false && true);
console.log('108. true || false || false && false', true || false || false && false);
console.log('109. false || false || false && true', false || false || false && true);
console.log('110. false || false || false && false', false || false || false && false);
console.log('111. false || true || false && false', false || true || false && false);
console.log('112. false || false || true && false', false || false || true && false);

console.log('-------------------');

console.log('113. true || true || true || true', true || true || true || true);
console.log('114. true || true || true || false', true || true || true || false);
console.log('115. true || true || false || true', true || true || false || true);
console.log('116. true || false || true || true', true || false || true || true);
console.log('117. false || true || true || true', false || true || true || true);
console.log('118. true || true || false || false', true || true || false || false);
console.log('119. true || false || false || true', true || false || false || true);
console.log('120. false || false || true || true', false || false || true || true);
console.log('121. true || false || true || false', true || false || true || false);
console.log('122. false || true || true || false', false || true || true || false);
console.log('123. false || true || false || true', false || true || false || true);
console.log('124. true || false || false || false', true || false || false || false);
console.log('125. false || false || false || true', false || false || false || true);
console.log('126. false || false || false || false', false || false || false || false);
console.log('127. false || true || false || false', false || true || false || false);
console.log('128. false || false || true || false', false || false || true || false);

console.log('-------------------');
console.clear();

if (4 == '4') {
    console.log('Taip');
} else {
    console.log('Ne');
};
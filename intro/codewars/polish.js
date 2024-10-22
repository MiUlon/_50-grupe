/*

https://www.codewars.com/kata/57ab2d6072292dbf7c000039

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

*/

function polishAlphabet(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'ą') {
            answer += 'a';
        } else if (s[i] === 'ć') {
            answer += 'c';
        } else if (s[i] === 'ę') {
            answer += 'e';
        } else if (s[i] === 'ł') {
            answer += 'l';
        } else if (s[i] === 'ń') {
            answer += 'n';
        } else if (s[i] === 'ó') {
            answer += 'o';
        } else if (s[i] === 'ś') {
            answer += 's';
        } else if (s[i] === 'ź') {
            answer += 'z';
        } else if (s[i] === 'ż') {
            answer += 'z';
        } else {
            answer += s[i];
        };
    };

    return answer;
};

console.log(polishAlphabet('Jędrzej Błądziński'), '-->', 'Jedrzej Bladzinski');

function polishAlphabet2(text) {
    let answer = '';
    const polishAbc = 'ąćęłńóśźż';
    const normalAbc = 'acelnoszz';

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        let index = -1;

        for (let j = 0; j < polishAbc.length; j++) {
            if (letter === polishAbc[j]) {
                answer += normalAbc[j];
                index = j;
            };
        };

        if (index === -1) {
            answer += letter;
        };
    };

    return answer;
};

console.log(polishAlphabet2('Jędrzej Błądziński'), '-->', 'Jedrzej Bladzinski');

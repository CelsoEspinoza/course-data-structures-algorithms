
function reverse(str) {
    // check the value
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Hey baby. Something is bad.';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let index = totalItems; index >= 0; index--) {
        backwards.push(str[index]);
    }

    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

function reverseRecursive(str) {
    const strLength = str.length;
    if (strLength === 1) {
        return str;
    }
    return `${reverseRecursive(str.substring(1))}${str[0]}`;
}

const myString = 'Hola, mi nombre es Celso';

console.log(reverseRecursive(myString));
console.log(reverse(myString));
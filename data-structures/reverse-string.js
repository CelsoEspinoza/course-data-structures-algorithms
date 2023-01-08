
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

// const myString = 'Hola, mi nombre es Celso';
const myString = 12312;

console.log(reverse(myString));
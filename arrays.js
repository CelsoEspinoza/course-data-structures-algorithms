const strings = ['a', 'b', 'c', 'd', 'e'];
// 4*5 = 20 bytes of storage

strings[2]; // O(1)

// push
strings.push('f'); // O(1)
/* It can be O(n) if we have to copy the entire array in another memory location
    Whenever we do that, the computer has to iterate to the entire array to copy it.
*/

// pop (Removes the last value of the array)
strings.pop(); // O(1)

// unshift (Insert a value at the begining of the array)
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'aliens'); // O(n)

console.log(strings);

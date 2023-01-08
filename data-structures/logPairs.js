const boxes = [1,2,3,4,5,6,7];

function logPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`(${array[i]},${array[j]})`);
        }
    }
}
logPairs(boxes); // O(n ^ 2) Quadratic time

const boxes2 = [1,2,3,4,5,6,7];

function logPairs2(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            console.log(`(${array1[i]},${array2[j]})`);
        }
    }
}
logPairs2(boxes, boxes2); // O (a * b)

//https://www.bigocheatsheet.com/

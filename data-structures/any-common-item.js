

function hasAnyCommonItem(array1, array2) {
    const setArray1 = new Set(array1);
    const setArray2 = new Set(array2);
    const setArrayBoth = new Set([...array1, ...array2]);

    const allValues = setArray1.size + setArray2.size;

    if (setArrayBoth.size < allValues) {
        return true;
    }
    return false;
}

// const a = ['a', 'b', 'd', 'e', 'f', 'g', 'g', 'as', 'asd', '2', 'd', '234'];
// const b = ['x', 'y', 'z', 'x', '3', 'n', 'm', 'mm', 'aa', '123', 'ed'];

console.log(hasAnyCommonItem(a, b));


function hasAnyCommonItem2(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) return true;
        }
    }
    return false;
}
const a = ['a', 'b', 'd', 'e', 'f', 'g', 'g', 'as', 'asd', '2', 'd', '234'];
const b = ['x', 'y', 'z', 'x', '3', 'n', 'm', 'mm', 'aa', '123', 'a'];

console.log(hasAnyCommonItem2(a, b));
// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

// Divede and conquer. 
// Time complexity: Best => O(nlog(n)) | Average => O(nlog(n)) | Worst => O(nlog(n)) 
// Space complexity: Worst => O(n)
// If worry for worst case scenarios, use it.
// If sorting in memory, this is really expensive.
function mergeSort(array) {
    if (!array || !Array.isArray(array)) {
        return 'Error';
    }
    
    if (array.length === 1) {
        return array;
    }
    const spliceIndex = Math.ceil(array.length / 2);
    const left = array.splice(0, spliceIndex);
    const right = array.splice(-spliceIndex);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    if (left.length === 0 || left[0] > right[right.length - 1]) {
        return [ ...right, ...left ];
    }
    if (right.length === 0 || left[left.length - 1] < right[0]) {
        return [ ...left, ...right ];
    }

    let i = 0;
    let j = 0;
    const mergedArray = [];
    while (i < left.length || j < right.length) {
        if (left[i] === undefined) {
            // We can insert the whole left thing
            mergedArray.push(right[j]);
            j++;
        } else if (right[j]  === undefined) {
            // We can insert the whole left thing
            mergedArray.push(left[i]);
            i++;
        } else if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else if (left[i] > right[j]) {
            mergedArray.push(right[j]);
            j++;
        } else {
            mergedArray.push(left[i]);
            mergedArray.push(right[j]);
            i++;
            j++;
        }
    }

    return mergedArray;
}

console.log(JSON.stringify(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])));
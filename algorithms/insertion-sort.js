// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// Use it when you have a nearly sorted data or small set of it.
// It goes very fast comparing to others algorithms
function insertionSort(values) {
    if (!values || !Array.isArray(values)) {
        return 'Error';
    }
    if (values.length <= 1) {
        return values;
    }

    for (let i = 1; i < values.length; i++) {
        if (values[i] < values[0]) {
            values.unshift(values.splice(i, 1)[0])
        } else if (values[i] > values[i - 1]) {
            // do nothing
        } else {
            // Iterate between(<0;i-1>) the left side of the i element
            for (let j = 1; j < i - 2; j++) {
                if (values[i] < values[j]) {
                    // Do not forget to remove it before inserting... (It broke everything :P)
                    values.splice(j, 0, values.splice(i, 1)[0]);
                }
            }
        }
    }

    return values;
}

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
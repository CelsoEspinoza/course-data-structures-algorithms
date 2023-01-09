// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(values) {
    if (!values || !Array.isArray(values)) {
        return 'Error';
    }
    if (values.length <= 1) {
        return values;
    }

    let keepIterating = true;
    let iterableItems = values.length;
    while(keepIterating) {
        keepIterating = false;
        for (let i = 1; i < iterableItems; i++) {
            if (values[i-1] > values[i]) {
                const temp = values[i-1];
                values[i-1] = values[i];
                values[i] = temp;
                keepIterating = true;
            }
        }
        iterableItems--;
    }

    return values;
}

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
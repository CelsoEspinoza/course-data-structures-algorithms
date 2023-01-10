// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(values) {
    if (!values || !Array.isArray(values)) {
        return 'Error';
    }
    if (values.length <= 1) {
        return values;
    }

    for (let i = 0; i < values.length; i++) {
        const lowestItem = {
            value: values[i],
            index: i,
        };
        for (let j = i; j < values.length; j++) {
            if (values[j] < lowestItem.value) {
                lowestItem.value = values[j];
                lowestItem.index = j;
            }
        }
        console.log(lowestItem);
        values[lowestItem.index] = values[i];
        values[i] = lowestItem.value;
    }

    return values;
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
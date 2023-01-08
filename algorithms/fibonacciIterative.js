function fibonacciRecursive(index) { // O(2^n) Horrible!!!
    if (index < 2) {
        return index;
    }
    return fibonacciRecursive(index-1) + fibonacciRecursive(index-2);
}

console.log(fibonacciRecursive(24));
function fibonacciRecursive(index) { // O(2^n) Horrible!!!
    if (index < 2) {
        return index;
    }
    return fibonacciRecursive(index-1) + fibonacciRecursive(index-2);
}

// console.log(fibonacciRecursive(24));

function dynamicProgrammingFibo() { // O(n)
    const cache = {};
    const fibo = (index) => {
        if (index in cache) {
            return cache[index];
        }
        if (index < 2) {
            return index;
        }
        cache[index] = fibo(index-1) + fibo(index-2);
        return cache[index];
    }
    return fibo;
}

const fibonacciFunc = dynamicProgrammingFibo();

console.log(fibonacciFunc(50));
console.log(fibonacciFunc(55));
console.log(fibonacciFunc(100));
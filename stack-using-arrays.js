class StackArr {
    constructor() {
        this.values = []
    }

    peek() {
        const length = this.values.length;
        return this.values[length - 1];
    }

    push(value) {
        this.values.push(value);
        return this.values;
    }

    pop() {
        this.values.pop();
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

const myStack = new StackArr();
console.log(JSON.stringify(myStack.peek()));
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(JSON.stringify(myStack));
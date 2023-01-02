class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length = 1;
            return this;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return this;
        }
        if (this.length === 1) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(JSON.stringify(myStack));
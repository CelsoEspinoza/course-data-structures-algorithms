// Transforming "linked-list.js" into a doubly-linked-list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    print() {
        this.printFoward();
        this.printBackwards();
    }
    printFoward() {
        let counter = 0;
        const array = [];
        let nodeFound = this.head;
        while (counter !== this.length) {
            array.push(nodeFound.value);
            nodeFound = nodeFound.next;
            counter++;
        }
        console.log(array);
    }
    printBackwards() {
        let counter = 0;
        const array = [];
        let nodeFound = this.tail;
        while (counter !== this.length) {
            array.push(nodeFound.value);
            nodeFound = nodeFound.previous;
            counter++;
        }
        console.log(array);
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.previous = this.tail
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        if (index === this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index > this.length - 1) {
            return 'Error';
        }
        if (index < 0) {
            return 'Error';
        }
        if (index === 0) {
            return this.prepend(value);
        }
        if (index === this.length - 1) {
            return this.append(value);
        }

        const beforeIndexNode = this.traverseToIndex(index - 1);
        const nodeToInsert = new Node(value);

        nodeToInsert.next = beforeIndexNode.next;
        beforeIndexNode.next.previous = nodeToInsert;

        beforeIndexNode.next = nodeToInsert;
        nodeToInsert.previous = beforeIndexNode;

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0) {
            return 'Error';
        }
        if (index > this.length - 1) {
            return 'Error';
        }
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
            return this;
        }
        const beforeIndexNode = this.traverseToIndex(index - 1);
        const unwantedNode = beforeIndexNode.next;
        beforeIndexNode.next = unwantedNode?.next;
        if (unwantedNode?.next) {
            unwantedNode.next.previous = beforeIndexNode;
        }

        if (index === this.length - 1) {
            this.tail = beforeIndexNode;
        }
        this.length--;
        
        return this;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(24);
myDoublyLinkedList.prepend(12);
myDoublyLinkedList.insert(2, 20);
myDoublyLinkedList.insert(3, 14);
myDoublyLinkedList.remove(3);
myDoublyLinkedList.print();
// 1 -> 10 --> 5 --> 6

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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

        const nodePreviousIndex = this.traverseToIndex(index - 1);
        const nodeToInsert = new Node(value);
        nodeToInsert.next = nodePreviousIndex.next;
        nodePreviousIndex.next = nodeToInsert;
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
            this.length--;
            return this;
        }
        const beforeIndexNode = this.traverseToIndex(index - 1);
        const afterIndexNode = this.traverseToIndex(index + 1);

        beforeIndexNode.next = afterIndexNode;

        if (index === this.length - 1) {
            this.tail = beforeIndexNode;
        }
        
        this.length--;
        
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(2, 20);
// 1 -> 10 --> 20 -> 5 --> 6
myLinkedList.append(8);
myLinkedList.remove(myLinkedList.length - 1);
// 1 -> 10 --> 20 -> 5 --> 6
myLinkedList.remove(2);
// 1 -> 10 --> 5 --> 6
console.log(JSON.stringify(myLinkedList));
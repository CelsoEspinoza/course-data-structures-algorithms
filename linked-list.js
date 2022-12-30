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

        let nodePreviousIndex = this.head;
        for (let i = 0; i < index - 1; i++) {
            nodePreviousIndex = nodePreviousIndex.next;
        }
        const nodeToInsert = new Node(value);
        nodeToInsert.next = nodePreviousIndex.next;
        nodePreviousIndex.next = nodeToInsert;

        this.length++;

        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(3, 20);
// 1 -> 10 --> 20 -> 5 --> 6
console.log(JSON.stringify(myLinkedList));
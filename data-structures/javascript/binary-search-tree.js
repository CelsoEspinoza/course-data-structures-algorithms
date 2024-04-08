class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        const { parentNode, sideChosen } = this.findParentNode(value);
        if (parentNode[sideChosen]?.value !== newNode.value) {
            parentNode[sideChosen] = newNode;
        }
        return this;
    }

    lookup(value) {
        const { parentNode, sideChosen } = this.findParentNode(value);
        return parentNode[sideChosen];
    }

    findParentNode(value) {
        let nodeSearch = this.root;
        let grandParentNode;
        let parentNode;
        let sideChosen;

        while (nodeSearch) {
            grandParentNode = parentNode;
            parentNode = nodeSearch;
            if (value === nodeSearch.value) {
                return { parentNode: grandParentNode, sideChosen };
            }
            if (value > nodeSearch.value) {
                nodeSearch = nodeSearch.right;
                sideChosen = 'right';
            } else {
                nodeSearch = nodeSearch.left;
                sideChosen = 'left';
            }
        }
        return { parentNode, sideChosen };
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        const array = [];
        const myQueue = []; // Used an array for simplicity
        myQueue.push(currentNode); // enqueue

        while (myQueue.length > 0) { // !isEmpty
            currentNode = myQueue[0]; // peek
            myQueue.shift(); // dequeue
            if (currentNode.left) {
                myQueue.push(currentNode.left); // enqueue
            }
            if (currentNode.right) {
                myQueue.push(currentNode.right); // enqueue
            }
            array.push(currentNode.value);
        }
        return array;
    }

    breadthFirstSearchRecursively(queue, list) {
        if (queue.length === 0) {
            return list;
        }
        const currentNode = queue[0]; // peek
        queue.shift(); // dequeue
        if (currentNode.left) {
            queue.push(currentNode.left); // enqueue
        }
        if (currentNode.right) {
            queue.push(currentNode.right); // enqueue
        }
        list.push(currentNode.value);

        return this.breadthFirstSearchRecursively(queue, list);
    }

    DFSInOrder() {
        return traverseInOrder(this.root, []);
    }

    DFSPreOrder() {
        return traversePreOrder(this.root, []);
    }

    DFSPostOrder() {
        return traversePostOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);    
    return list;
}

/*
        27
    14      52
  5       50  59
*/

const myBinarySearchtree = new BinarySearchTree();
myBinarySearchtree.insert(27);
myBinarySearchtree.insert(14);
myBinarySearchtree.insert(52);
myBinarySearchtree.insert(52);
myBinarySearchtree.insert(5);
myBinarySearchtree.insert(59);
myBinarySearchtree.insert(50);
console.log(JSON.stringify(myBinarySearchtree));
console.log(JSON.stringify(myBinarySearchtree.lookup(52)));
// [ 27, 14, 52, 5, 50, 59 ]
console.log('breadthFirstSearch', myBinarySearchtree.breadthFirstSearch());
console.log('breadthFirstSearchRecursively', myBinarySearchtree.breadthFirstSearchRecursively([myBinarySearchtree.root], []));
// [ 5, 14, 27, 50, 52, 59 ]
console.log('DFSInOrder', myBinarySearchtree.DFSInOrder());
// [ 27, 14, 5, 52, 50, 59 ]
console.log('DFSPreOrder', myBinarySearchtree.DFSPreOrder());
// [ 5, 14, 50, 59, 52, 27 ]
console.log('DFSPostOrder', myBinarySearchtree.DFSPostOrder());
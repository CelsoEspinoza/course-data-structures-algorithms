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
}

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
class MyArray {
    constructor(arr) {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        this.pop();
    }
}

const myArr = new MyArray();
myArr.push('Holaaa');
myArr.push('Celestial');
myArr.push('!');
myArr.delete(1);
console.log(myArr);
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
        const hashKey = this._hash(key);
        if (!this.data[hashKey]) {
            this.data[hashKey] = [[key, value]];
        } else {
            this.data[hashKey].push([key, value]);
        }
    }

    get(key) {
        const hashKey = this._hash(key);
        const currentPair = this.data[hashKey];
        if (!currentPair) {
            return undefined;
        }
        for (let i = 0; i < currentPair.length; i++) {
            const pair = currentPair[i];
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            const items = this.data[i];
            if (items) {
                for (let j = 0; j < items.length; j++) {
                    const pair = items[j];
                    keys.push(pair[0])
                }
            }
        }
        return keys;
    }
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  myHashTable.set('any-other-value', 'boli')

  console.log(myHashTable);
  console.log(myHashTable.get('grapes'));
  console.log(myHashTable.get('apples'));
  console.log(myHashTable.get('any-value'));
  console.log(myHashTable.keys());
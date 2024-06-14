class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        return self.data[index]
    
    def append(self, value):
        self.data[self.length] = value
        self.length += 1

    def pop(self, index = None):
        if not index:
            last_item = self.__remove_last()
            return last_item
        
        toBeRemoved = self.get(index)
        for i in range(index, self.length):
            self.data[i] = self.data.get(i+1)
        self.__remove_last()
        return toBeRemoved

    def __remove_last(self):
        last_item = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return last_item
    
myArray = MyArray()
myArray.append('Juan')
myArray.append('Pedro')
myArray.append('José')
print(myArray.pop(1))

print(myArray.get(1), myArray.length)


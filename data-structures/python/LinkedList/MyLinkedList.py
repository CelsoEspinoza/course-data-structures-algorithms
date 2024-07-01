class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class MyLinkedlist:
    def __init__(self, value) -> None:
        self.head = Node(value)
        self.tail = self.head
        self.length = 1

    def append(self, value) -> None:
        newNode = Node(value)
        self.tail.next = newNode
        self.tail = newNode
        self.length += 1

    def prepend(self, value) -> None:
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
        self.length += 1

    def insert(self, value, position) -> None:
        if position < 0 or position > self.length:
            raise Exception('Position not permitted')

        if position == 0:
            self.prepend(value)
            return

        if position == self.length:
            self.append(value)
            return
        
        newNode = Node(value)

        previousNode = self.findNode(position - 1)

        newNode.next = previousNode.next
        previousNode.next = newNode
        self.length += 1

        
    def findNode(self, position) -> Node:
        if position == 0:
            return self.head
        if position == self.length - 1:
            return self.tail
        
        node = self.head
        for _ in range(position):
            node = node.next
        return node
    
    def printValues(self) -> None:
        import copy
        node = copy.deepcopy(self.head)
        while(node is not None):
            print('value -> ', node.value)
            node = node.next
        print('length ->', self.length)


holi = MyLinkedlist(5)
holi.append(6)
holi.append(7)
holi.prepend(4)
holi.insert(10, 3)
holi.printValues()
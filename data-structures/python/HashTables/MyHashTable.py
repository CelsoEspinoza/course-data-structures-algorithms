class MyHashTable:
    def __init__(self, size) -> None:
        self.data = []

    def __hash(self, key):
        return hash(key)

    def set(self, key, value) -> None:
        pass
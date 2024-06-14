class Solution:
    def __init__(self, data) -> None:
        self.data = data

    def firstRecurringCharacter(self):
        values = set()
        for value in self.data:
            if value in values:
                return value
            else:
                values.add(value)
        return None
data = [2,3,4,5]
sol = Solution(data)
print('First recurring value: ', sol.firstRecurringCharacter())
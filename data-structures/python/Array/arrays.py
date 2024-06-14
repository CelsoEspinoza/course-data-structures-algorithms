
strings = ['a', 'b', 'c', 'd']

print(strings[2]) #O(n)

# append
print('append => ', strings.append('e')) #O(1)

# pop
print('pop => ', strings.pop()) #O(1)

# insert
strings.insert(0, 'x') #O(n)

print(strings)
# Find two numbers in the array that sum a specific number.
# 1) When the array is ordered
# 2) When the array is not ordered
# Ex: 
# [1,2,3,9] => Sum: 8 NO
# [1,2,4,4] => sum: 8 YES

# 1) Using brute force. O(n^2)
numbers = [1,2,4,4]

def bruteForce(numbers, sum):
    for i, num in enumerate(numbers):
        for j in range(i+1, len(numbers)):
            following_num = numbers[j]
            new_sum = num + following_num
            if (sum == new_sum):
                return True
    return False


print(bruteForce(numbers, 9))

# 2) Using O(n) algorithm
numbers2 = [1,2,4,4]

def findTwoNumbers(numbers, sum):
    dict_comp = {}
    for num in numbers:
        comple = sum-num
        if (dict_comp.get(comple)):
            return True
        else:
            dict_comp[num] = comple
    return False


print(findTwoNumbers(numbers2, 8))



# Given an integer array nums, find the subarray with the largest sum, and return its sum.

# Example 1:
# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: The subarray [4,-1,2,1] has the largest sum 6.


def finMaxSumInSubarray(numbers):
    maxSum = -1000
    accSum = 0

    for num in numbers:
        accSum += num
        if accSum > maxSum:
            maxSum = accSum
        if accSum < 0:
            accSum = 0

    return maxSum
print(finMaxSumInSubarray([-2,1,-3,4,-1,2,20,-5,4]))


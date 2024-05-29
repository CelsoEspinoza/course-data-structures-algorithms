# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# Example 1:
# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]

# Example 2:
# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]
 
# Constraints:
# 1 <= nums.length <= 10^5
# -2^31 <= nums[i] <= 2^31 - 1
# 0 <= k <= 10^5

from typing import List

a = [1,2,3,4,5]
k = 3

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k = k % len(nums)
        if k == 0:
            return
        
        remaining = k - len(nums) % k
        for i in range(len(nums) - 1, -1, -1):
            if i - k >= 0:
                nums[i], nums[i-k] = nums[i-k], nums[i]

            if i - k == 0:
                k = remaining
                remaining = k - (i % k)

        print(nums)

sol1 = Solution()
sol1.rotate(a, k)

class Solution2:
    def rotate(self, nums: List[int], k: int) -> None:

        k = k % len(nums)
        if k < 1:
            return nums

        self.__rotateAll(nums, 0, len(nums)-1)
        self.__rotateAll(nums, 0, k-1)
        self.__rotateAll(nums, k, len(nums)-1)

    def __rotateAll(self, nums: List[int], left: int, right: int) -> None:
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1

Solution2().rotate([1,2,3,4,5], 3)
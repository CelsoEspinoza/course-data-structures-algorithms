

class Solution:
    def rotate(self, nums, k):

        k = k % len(nums)
        if k < 1:
            return nums

        self.__rotateAll(nums, 0, len(nums)-1)
        self.__rotateAll(nums, 0, k-1)
        self.__rotateAll(nums, k, len(nums)-1)

    def __rotateAll(self, nums, left, right):
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1

Solution().rotateArray([1,2,3,4,5], 3)
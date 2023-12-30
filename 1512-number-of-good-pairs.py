'''
1512. Number of Good Pairs
LeetCode
Easy

Description:
    1512. Number of Good Pairs
Easy
Topics
Companies
Hint

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.



Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0



Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100

'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an array
# Results - return the pairs that are good - where the specified number is matched later
# Example - see above
# Pseudocode:
#   create sum
#   for x in nums
#       for y[x] in nums
#           if they match add 1 to sum
#   return sum

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        n = len(nums)
        sum = 0
        for x in range(n):
            for y in range(n):
                if x < y:
                    if nums[x] == nums[y]:
                        sum += 1
        return sum

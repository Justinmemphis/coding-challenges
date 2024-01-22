'''
645. Set Mismatch
Easy
Topics
Companies

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.



Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:

Input: nums = [1,1]
Output: [1,2]



Constraints:

    2 <= nums.length <= 104
    1 <= nums[i] <= 104

Seen this question in a real interview before?
1/4
Yes
No
Accepted
309.3K
Submissions
723.4K
Acceptance Rate
42.7%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an array of numbers but one number is wrong (and a duplicate of another number
# Results - return array of duplicate number and number missing
# Example - see above
# Pseudocode:
#   iterate over the array (with enumerate)
#       if index + 1 does not equal current value
#           return current value, index+1

# didn't solve - favorite solution here:
class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums)
        s = n*(n+1)//2
        miss = s - sum(set(nums))
        duplicate = sum(nums) + miss - s
        return [duplicate, miss]


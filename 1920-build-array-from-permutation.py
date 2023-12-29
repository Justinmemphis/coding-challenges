'''
1920. Build Array from Permutation
LeetCode
Easy

Description:
    1920. Build Array from Permutation
Easy
Topics
Companies
Hint

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).



Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

Example 2:

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]



Constraints:

    1 <= nums.length <= 1000
    0 <= nums[i] < nums.length
    The elements in nums are distinct.



Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
Seen this question in a real interview before?
1/4
Yes
No
Accepted
441.7K
Submissions
493.7K
Acceptance Rate
89.5%
Topics
Array
Simulation
Companies
Hint 1
Just apply what's said in the statement.
Hint 2
Notice that you can't apply it on the same array directly since some elements will change after application
Discussion (71)
💡 Discussion Rules

1. Please don't post any solutions in this discussion.

2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.

3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.
CyberMaestro
Feb 22, 2023

    reading the task
    don't understand anything.
    solving the task
    still don't understand anything.

112
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# iterate over the array returning the new array value

class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        newNums = []
        for x in nums:
            newNums.append(nums[x])
        return newNums

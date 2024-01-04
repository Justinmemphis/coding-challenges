'''
1470. Shuffle the Array
Easy
Topics
Companies
Hint

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

 

Constraints:

    1 <= n <= 500
    nums.length == 2n
    1 <= nums[i] <= 10^3

Seen this question in a real interview before?
1/4
Yes
No
Accepted
624.2K
Submissions
706.3K
Acceptance Rate
88.4%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an array divided by two (n)
# Results - return the array with element 0 plus element n, etc. (re-sort array)
# Example - see above
# Pseudocode:
#   create result array
#   iterate over the array from range 0 to range n
#       add to result array array 0 + i and array n + i
#   return result array

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        result = []
        for x in range(0, n):
            result.append(nums[x])
            result.append(nums[n+x])
        return result

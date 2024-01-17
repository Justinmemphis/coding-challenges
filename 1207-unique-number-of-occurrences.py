'''
1207. Unique Number of Occurrences
Easy
Topics
Companies
Hint

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.



Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true



Constraints:

    1 <= arr.length <= 1000
    -1000 <= arr[i] <= 1000

Seen this question in a real interview before?
1/4
Yes
No
Accepted
417.7K
Submissions
556.5K
Acceptance Rate
75.1%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an array of values
# Results - return true if each element occurs a unique number of times; else return false
# Example - see above
# Pseudocode:
#   there's some python code that returns occurences as a dict - do that and then
#       check numbers of occurences are unique

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counts = dict(Counter(arr))
        uniqueCount = []
        for k,v in counts.items():
            if v in uniqueCount:
                return False
            else:
                uniqueCount.append(v)
        return True

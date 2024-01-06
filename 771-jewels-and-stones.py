'''
771. Jewels and Stones
Easy
Topics
Companies
Hint

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".



Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0



Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
972.7K
Submissions
1.1M
Acceptance Rate
88.4%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - given a string of characters and another string of characters
# Results - return how many of the small string characters are in the large string
# Example - see above
# Pseudocode:
#   result = 0
#   for characters in long array
#       if short array includes characters
#           result += 1
#   return result

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        result = 0
        for c in stones:
            if c in jewels:
                result += 1
        return result


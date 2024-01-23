'''
1281. Subtract the Product and Sum of Digits of an Integer
Easy
Topics
Companies
Hint
Given an integer number n, return the difference between the product of its digits and the sum of its digits.



Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15

Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21



Constraints:

    1 <= n <= 10^5

Seen this question in a real interview before?
1/4
Yes
No
Accepted
456.4K
Submissions
528.4K
Acceptance Rate
86.4%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an integer
# Results - return the product of the digits less the sum of the digits
# Example - see above
# Pseudocode:
#   return [list comp product] - [list comp sum]

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        product = 1
        summ = 0
        for x in str(n):
            product *= int(x)
        for y in str(n):
            summ += int(y)
        return product - summ

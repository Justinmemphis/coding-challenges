'''
70. Climbing Stairs
Easy
Topics
Companies
Hint

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step



Constraints:

    1 <= n <= 45

Seen this question in a real interview before?
1/4
Yes
No
Accepted
2.9M
Submissions
5.5M
Acceptance Rate
52.3%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an integer
# Results - return how many combinations of 1 and 2 get you to that integer
# Example - see above
# Pseudocode:
#   this seems like a kind of factorial problem of some sort
#   n = 9:
#   1 * 9
#   2 * 4 + 1
#   1 * 7 + 2
#   1 * 5 + 4
#   1 * 3 + 3
#   2 * 3 + 3
#   2 * 2 + 5
#   
#   if odd = 1 * n
#           then 
'''
4
1 + 1 + 1 + 1
2 + 1 + 1
1 + 2 + 1
1 + 1 + 2
2 + 2

5
1 + 1 + 1 + 1 + 1
2 + 1 + 1 + 1
1 + 2 + 1 + 1
1 + 1 + 2 + 1
1 + 1 + 1 + 2
2 + 2 + 1
2 + 1 + 2
1 + 2 + 2

6
1 + 1 + 1 + 1 + 1 + 1
2 + 1 + 1 + 1 + 1
2 + 2 + 1 + 1
2 + 2 + 2

7
1 + 1 + 1 + 1 + 1 + 1 + 1
2 + 1 + 1 + 1 + 1 + 1
2 + 2 + 1 + 1 + 1
2 + 2 + 2 + 1

8
1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
2 + 1 + 1 + 1 + 1 + 1 + 1
2 + 2 + 1 + 1 + 1 + 1
2 + 2 + 2 + 1 + 1
2 + 2 + 2 + 2

9 = 5
8 = 5
7 = 4
6 = 4

5 = 8
4 = 5
3 = 3       
2 = 2
1 = 1

if 1 = 1
if 2 = 2
else 2 + (n/3 trunc)

'''

# didn't solve - see favorite solution from others below:

class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        return self.climbStairs(n-1) + self.climbStairs(n-2)

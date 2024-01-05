'''
1637. Widest Vertical Area Between Two Points Containing No Points
Easy
Topics
Companies
Hint

Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.



Example 1:
​

Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.

Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3



Constraints:

    n == points.length
    2 <= n <= 105
    points[i].length == 2
    0 <= xi, yi <= 109

Seen this question in a real interview before?
1/4
Yes
No
Accepted
143.4K
Submissions
162K
Acceptance Rate
88.5%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - given points on a 2D plane
# Results - find maximum width of vertical plane between points
# Example - see above
# Pseudocode:
#   really just look at x values and take maximum difference between x values

class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        myList = [item[0] for item in points]
        myList.sort()
        result = 0
        for x in range(1, len(myList) - 1):
            diff = myList[x] - myList[x-1]
            if diff > result:
                result = diff
        return result

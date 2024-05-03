'''
Geometry Basics: Distance between points in 2D
Codewars
8kyu

Description:


This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50⩽x,y⩽50 -50 \leqslant x,y \leqslant 50 −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
Geometry
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive two sets of coordinates
# Results - calculate distance between the two coordinates
# Example - see tests
# Pseudocode:
#   distance = square root ( (x2 - x1) ^ 2 + (y2 - y1) ^ 2 )

# didn't solve - my favorit solution:
def distance_between_points(a, b):
    return ((b.x - a.x) ** 2 + (b.y - a.y) ** 2) ** 0.5

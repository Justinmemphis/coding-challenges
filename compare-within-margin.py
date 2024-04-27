'''
Compare within margin
Codewars
8kyu

Description:


Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

    When a is close to b, return 0.
        For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.

Otherwise...

    When a is less than b, return -1.

    When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.
Example 1

If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

This is because a and b are no more than 3 numbers apart.
Example 2

If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

This is because the distance between a and b is greater than 0, and a is less than b.
Fundamentals
Logic
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive two numbers and a margin
# Results - return 1 if a is greater than b, -1 if a is less than b, 0 if a within margin of b
# Example - see above
# Pseudocode:
#   diff = b - a
#   if diff > margin
#       if a > b
#           return 1
#       else
#           return -1
#   else
#       return 0

# didn't solve - favorite solution here:

def close_compare(a, b, margin = 0):
    if abs(a - b) <= margin:
        return 0
    elif a < b:
        return -1
    return 1

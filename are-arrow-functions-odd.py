'''
Are arrow functions odd?
Codewars
8kyu

Description:


Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a list
# Results - return a list with the odd digits in the list
# Example - see above
# Pseudocode - [x for x if x is odd]

odds = lambda x: [y for y in x if y % 2 != 0]

'''
Grasshopper - Combine strings
Codewars
8kyu

Description:

Combine strings function

Create a function named (combine_names) that accepts two parameters (first and last name). The function should return the full name.

Example:

combine_names('James', 'Stevens')

returns:

'James Stevens'

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Just used formatted string literals - f" "

def combine_names(first, last):
    return f'{first} {last}'

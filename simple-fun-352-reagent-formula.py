'''
Simple Fun #352: Reagent Formula
Codewars
8kyu

Description:


Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)

Task

You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
Example

For formula = [1,3,7], The output should be true.

For formula = [7,1,2,3], The output should be false.

For formula = [1,3,5,7], The output should be false.

For formula = [1,5,6,7,3], The output should be true.

For formula = [5,6,7], The output should be true.

For formula = [5,6,7,8], The output should be true.

For formula = [6,7,8], The output should be false.

For formula = [7,8], The output should be true.
Note

    All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

    Happy Coding ^_^

Fundamentals
'''

# Solution:
# PREP - Parameters, Resuls, Example, Pseudocode
# Parameters - receive input of numbers
# Results - return if numbers coordinated or not
# Example - see above
# Pseudocode:
#   if (1 and 2):
#       return false
#   else if (3 and 4):
#       return false
#   else if (5 and != 6):
#       return false
#   else if (6 and != 5):
#       return false
#   else if (7 or 8):
#       return true

def isValid(formula):
    fm = formula
    if (1 in fm and 2 in fm):
        return false
    elif (3 in fm and 4 in fm):
        return false
    elif (5 in fm and 6 not in fm):
        return false
    elif (6 in fm and 5 not in fm):
        return false
    elif (7 in fm or 8 in fm):
        return true
    else:
        return false

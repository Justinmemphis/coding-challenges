'''
Formatting decimal places #0
Codewars
8kyu

Description:


Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34

Fundamentals
'''

# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number
# Results - return the number rounded to two decimal places
# Example - 5.5589 -> 5.56
# Pseudocode
#   return number rounded to two decimal places

def two_decimal_places(n):
    return round(n,2)

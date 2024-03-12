'''
validate code with simple regex
Codewars
8kyu

Description:


Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
Regular Expressions
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string of digits
# Results - return true if first digit is either 1, 2, or 3
# Example - 890 -> false; 145 -> true
# Pseudocode:
#   n/a

import re

def validate_code(code):
    return bool(re.match(r"[1-3]",str(code)))

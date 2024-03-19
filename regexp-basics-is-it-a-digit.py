'''
Regexp Basics - is it a digit?
Codewars
8kyu

Description:


Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
Regular Expressions
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a character
# Results - return true if a digit
# Example - 0 -> true
# Pseudocode:
#   bool re.search (string, answers)

import re

def is_digit(n):
    return bool(re.match("\d\Z", n))

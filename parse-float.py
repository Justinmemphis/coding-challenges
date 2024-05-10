'''
Parse float
Codewars
8kyu

Description:


Write function parse_float which takes a string/list and returns a number or 'none' if conversion is not possible.
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string or list
# Results - return the string/list as a number or none
# Example - see test cases
# Pseudocode:
#   try
#       parse float
#   catch
#       return none

def parse_float(string):
    try:
        return float(string)
    except:
        return None

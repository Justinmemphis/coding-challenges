'''
Is it a number?
Codewars
8kyu

Description:


Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return true if it is a number - false if it is not
# Example - see above
# Pseudocode:
#   trim string of whitespace
#   return if string is number

def is_digit(s):
    try:
        int(s)
    except ValueError:
        try:
            float(s)
        except ValueError:
            return False
        return True
    return True

# Note - I should have just tested if it was a float - ints are included within floats

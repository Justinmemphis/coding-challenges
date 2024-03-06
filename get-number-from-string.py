'''
Get number from string
Codewars
8kyu

Description:


Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

Strings
Regular Expressions
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return all digits from the string as a number
# Example - see above
# Pseudocode:
#   return number(string filtered to digits)

def get_number_from_string(st):
    return int(''.join([n for n in st if n.isdigit()]))

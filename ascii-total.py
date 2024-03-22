'''
ASCII Total
Codewars
8kyu

Description:
    

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return the sum of the ascii values of the characters in the string
# Example - aaa -> 291
# Pseudocode:
#   sum = 0
#   for x in string:
#       sum += ascii x
#   return sum

def uni_total(s):
    sum = 0
    for c in s:
        sum += ord(c)
    return sum

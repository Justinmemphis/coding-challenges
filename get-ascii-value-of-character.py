'''
get ascii value of character
Codewars
8kyu

Description:


Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a character
# Results - return the ascii for that character
# Example - 'a' -> 97
# Pseudocode: return ascii

def get_ascii(ch : str) -> int:
    return ord(ch)

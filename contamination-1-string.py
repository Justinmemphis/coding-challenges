'''
Contamintation #1 - String - 
Codewars
8kyu

Description:
    An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"

Strings
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string and a single character
# Results - return string length with only single character
# Example - 'abcd','z' -> 'zzzz'
# Pseudocode:
#   return sting length * character

def contamination(text, char):
    return char * len(text)

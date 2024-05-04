'''
They say that only the name is long enough to attract attention.
They also said that only a simple Kata will have someone to solve it.
This is a sadly story #1: Are they opposite?

Codewars
8kyu

Description:

Task

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
Examples (input -> output)

"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false

Puzzles
Games
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive two strings
# Results - if strings are opposite case return True - else return False
# Example - see above
# Pseudocode:
#   if string a empty or string b empty:
#       return False
#   else:
#       compare swapcase vs other string index

def is_opposite(s1,s2):
    if s1 == '' or s2 == '':
        return False
    else:
        for i, c in enumerate(s1):
            if c.swapcase() != s2[i]:
                return False
        return True

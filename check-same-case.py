'''
Check same case
Codewars
8kyu

Description:


Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
Fundamentals
'''

# Solutions:
# PREP - Parameters, Results, Example, Pseudocode
# n/a - just solved problem

import re
notletter = r'[^a-zA-Z]'
upper = r'[A-Z]'
lower = r'[a-z]'

def same_case(a, b):
    print('a,b:',a,b)
    if re.search(notletter, a) or re.search(notletter, b):
        return -1
    elif re.search(lower, a) and re.search(upper, b):
        return 0
    elif re.search(upper, a) and re.search(lower, b):
        return 0
    else:
        return 1

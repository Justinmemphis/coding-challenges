"""
Regex count lowercase letters
Codewars
8kyu

Description:


Your task is simply to count the total number of lowercase letters in a string.
Examples

"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26

Fundamentals
Regular Expressions
Algorithms
"""

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return a count of how many lowercase letters are in the string
# Exmaple - see above
# Pseudocode:
#   create a count variable
#   iterate over the characters in the string
#       if character is lowercase (matches regex) add 1 to count
#   return count

import re

def lowercase_count(strng):
    count = 0
    regex = r'[a-z]'
    for c in strng:
        if re.match(regex,c):
            count += 1
    return count

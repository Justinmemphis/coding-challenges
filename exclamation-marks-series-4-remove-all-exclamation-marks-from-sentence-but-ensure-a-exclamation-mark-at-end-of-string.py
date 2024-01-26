'''
Exclamation marks series #4: Remove all exclamation marks form sentence but ensure a exclamation mark at the end of string
Codewars
8kyu

Description:
    Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - remove all exclamation marks except the last one
# Example - see above
# Pseudocode:

def remove(st):
    return st.replace('!','') + '!'

'''
Template Strings
Codewars
8kyu

Description:

Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
Strings
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive two strings
# Results - return the two strings combined with ' are ' in between them
# Example - see above 
# Pseudocode:
#   return a ' are ' b

def temple_strings(obj, feature):
    return f"{obj} are {feature}"

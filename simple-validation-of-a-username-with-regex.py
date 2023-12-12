'''
Simple validation of a username with regex
Codewars
8kyu

Description:


Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).
Regular Expressions
Fundamentals
'''

# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - evaluate if string matches regex or not
# Example/Pseudocode: n/a

import re

def validate_usr(username):
    pattern = re.compile(r"[a-z0-9_]{4,16}")
    return bool(pattern.fullmatch(username))


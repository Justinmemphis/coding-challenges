'''
Remove the time
8kyu
Codewars


Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.
Input

Input will always be a string, e.g., "Friday May 2, 7pm".
Output

Output will be the shortened string, e.g., "Friday May 2".
Date Time
Parsing
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return the string before the comma
# Example - see above
# Pseudocode:
#   return string before comma delimiter

def shorten_to_date(long_date):
    return long_date[:long_date.index(',')]

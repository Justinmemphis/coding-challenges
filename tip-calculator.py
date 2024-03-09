'''
Tip Calculator
Codewars
8kyu

Description:


Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

    Terrible: tip 0%
    Poor: tip 5%
    Good: tip 10%
    Great: tip 15%
    Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

    "Rating not recognised" in Javascript, Python and Ruby...
    ...or null in Java
    ...or -1 in C#

Because you're a nice person, you always round up the tip, regardless of the service.
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an amount and a rating
# Results - return a tip (round up) or "rating not recognized"
# Example - see above
# Pseudocode:
#   if terrible
#       return 0
#   elif etc.
#
#   else
#       return "Rating not recognized"

import math

def calculate_tip(amount, rating):
    rating = rating.lower()
    match rating:
        case 'terrible':
            return 0
        case 'poor':
            return math.ceil(amount * .05)
        case 'good':
            return math.ceil(amount * .1)
        case 'great':
            return math.ceil(amount * .15)
        case 'excellent':
            return math.ceil(amount * .2)
        case _:
            return 'Rating not recognised'

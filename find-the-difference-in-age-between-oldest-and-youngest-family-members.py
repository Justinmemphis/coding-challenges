'''
Find the Difference in Age between Oldest and Youngest Family Members
Codewars
8kyu

Description:
    

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
Algorithms
Arrays
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - given an array of ages
# Results - return array youngest, oldest, difference
# Example - n/a
# Pseudocode:
#   find min
#   find max
#   return min, max, max - min

def difference_in_ages(ages):
    return (min(ages), max(ages), max(ages) - min(ages))

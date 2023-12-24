'''
Pillars
Codewars
8kyu

Description:


There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
Fundamentals
Mathematics
'''

# Solution:
# PREP - Parameters, Results, Example, Pseuducode
# Parameters - receive a number of pillars, distance between pillars, and width of each pillar
# Results - calculate distance between first and last pillars without including first and last pillar width
# Example - 3 pillars, 10 meter distance, 10 centimeter width -> 10 meter (10000 cm) + 10 meter (10000 cm) + 10 cm pillar width
# Pseudocode:
#   return (pillar number - 1 * distance between * 1000) + (pillar number - 2 * pillar width)

def pillars(num_pill, dist, width):
    def pillars(num_pill, dist, width):
    if num_pill == 1:
        return 0
    elif num_pill == 2:
        return dist * 100
    else:
        return ((num_pill - 1) * dist * 100) + ((num_pill - 2) * width)

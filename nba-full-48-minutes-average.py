'''
NBA full 48 minutes average
Codewars
8kyu

Description:


An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

nba_extrap(12, 20) # 28.8
nba_extrap(10, 10) # 48
nba_extrap(5, 17) # 14.1
nba_extrap(0, 0) # 0

Notes:
All inputs will be either be an integer or float.
Follow your dreams!
Fundamentals
Mathematics
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive points per game and minutes per game
# Results - points per game / (minutes per game / 48 )
# Example - see above
# Pseudocode - see results

def nba_extrap(ppg, mpg):
    if ppg == 0 or mpg == 0:
        return 0
    else:
        return round(ppg / (mpg / 48), 1)

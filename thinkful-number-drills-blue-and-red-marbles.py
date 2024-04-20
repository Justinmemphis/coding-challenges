'''
Thinkful - Number Drills: Blue and red marbles
Codewars
8kyu

Description:


You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

    the number of blue marbles you put in the bag to start
    the number of red marbles you put in the bag to start
    the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
    the number of red marbles pulled out so far (always lower than the starting number of red marbles)

guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
Probability
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number of marbles, and how many you have pulled out so far
# Results - return probability of pulling out blue marble
# Example - see above
# Pseudocode:
#   total = red + blue
#   remaining = total - rout + bout
#   return (blue - bout)/remaining

def guess_blue(blue_start, red_start, blue_pulled, red_pulled):
    total = blue_start + red_start
    remain = total - (blue_pulled + red_pulled)
    return (blue_start - blue_pulled)/remain

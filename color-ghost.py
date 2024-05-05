'''
Color Ghost
Codewars
8kyu

Description:

Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = Ghost()
ghost.color  #=> "white" or "yellow" or "purple" or "red"

Object-oriented Programming
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a color
# Results - return a class with that color
# Example - see above
# Pseudocode:
#   create class with color

# didn't solve - see possible solution below:

import random

class Ghost(object):
  def __init__(self):
    self.color = random.choice(["white", "yellow", "purple", "red"])

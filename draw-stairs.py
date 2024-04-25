'''
Draw stairs
Codewars
8kyu

Description:


Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"

or printed:

I
 I
  I

Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

ASCII Art
Algorithms
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an integer
# Results - return a sequence of the letter I plus a line break plus incrementing whitespace
# Example - see above
# Pseudocode:
#   result
#   iterate from 0 to n
#       draw letters and add results

# didn't solve - favorite solution:
def draw_stairs(n):
    return '\n'.join(' '*i+'I' for i in range(n))

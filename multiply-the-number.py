'''
Multiply the number
Codewars
8kyu

Description:


Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number
# Results - return the number multiplied by 5 to the length of the digits
# Example - see above
# Pseudocode:
#   return number * (5 * (number length))

def multiply(n):
    length = len(str(abs(n)))
    return n * pow(5,length)

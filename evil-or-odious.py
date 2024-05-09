'''
Evil or Odious
Codewars
8kyu

Description:
    Description:

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)
Mathematics
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number
# Results - return one "It's Evil!" if even number of 1s in binary representation - otherwise "It's Odious!"
# Example - see above
# Pseudocode:
#   binary = number to binary
#   count = number of 1s in binary string
#   return count == even ? It's Evil : It's odious

def evil(n):
    binary = bin(n)
    count = binary.count('1')
    return "It's Evil!" if (count % 2 == 0) else "It's Odious!"

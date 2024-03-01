'''
Name on billboard
Codewars
8kyu



You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
Fundamentals
Restricted
Strings
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string and a number
# Results - return the length of the string times the number (without multiplier operator)
# Example - see above
# Pseudocode:
#   create sum variable
#   iterate over string
#       add number to string
#   return sum

def billboard(name, price=30):
    sum = 0
    for c in name:
        sum += price
    return sum

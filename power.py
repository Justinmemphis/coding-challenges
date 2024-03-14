'''
Power
Codewars
8kyu

Description:


The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
Examples

number_to_pwr(3, 2)  # -> 9 ( = 3 * 3 )
number_to_pwr(2, 3)  # -> 8 ( = 2 * 2 * 2 )
number_to_pwr(10, 6) # -> 1000000

Note: math.pow and some others math functions are disabled on final tests.
Restricted
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number and a power number
# Results - return the number times the power number
# Example - 2,3 -> 2 * 2 * 2
# Pseudocode:
#   answer = number
#   for i in (0,power):
#       number *= number
#   return answer

def number_to_pwr(number, p):
    answer = number
    if p == 0:
        return 1
    else:
        for i in range(0, p-1):
            answer *= number
        return answer

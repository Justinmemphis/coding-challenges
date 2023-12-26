'''
simple calculator
Codewars
8kyu

Description:


You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:

calculator(1, 2, '+') => 3
calculator(1, 2, '$') # result will be "unknown value"

Good luck!
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - first and second argument numbers; third argument sign
# Example - 1,2,+ -> 3
# Pseudocode:
# just us 'f' formattting and variable declaration

def calculator(x,y,op):
    if not isinstance(x, int) or not isinstance(y, int):
        return 'unknown value'
    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        return x / y
    else:
        return 'unknown value'

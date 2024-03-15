'''
The 'if' function
Codewars
8kyu

Description:


Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.
Example:

def truthy():
  print("True")

def falsey():
  print("False")

_if(True, truthy, falsey)
# prints 'True' to the console

Functional Programming
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a bool value and two functions
# Results - run function 1 if bool is true, else run function 2
# Example - see above
# Pseudocode - just an if statement

def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()

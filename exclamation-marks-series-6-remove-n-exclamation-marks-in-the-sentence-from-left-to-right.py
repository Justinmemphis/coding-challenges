'''
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
Codewars
8kyu

Description:
     Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudcode
# Parameters - receive a string and an integer
# Results - return the string but with the first n number of ! removed
# Example - see above
# Pseudocode:
#   replace('!','',n)

def remove(st, n):
    return st.replace('!','',n)

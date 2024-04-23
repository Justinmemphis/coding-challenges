'''
Collataz Conjecture (3n + 1)
Codewars
8kyu

Description:


The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1

#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

#References

    Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture

Fundamentals
Algorithms
Mathematics
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a number
# Results - return number of times you need to perform calculation until you get to 1
# Example - see above
# Pseudocode:
#   count = 0
#   sub function - use result number, changing it with each iteration
#       if result != 1 etc.
#       else
#           return count
#   if odd: number / 2
#   if even: 3 * number + 1

def hotpo(n):
    count = 0

    def subFunc(x, count):
        if x == 1:
            return count
        elif (x % 2 == 0): #even number
            count += 1
            x = x / 2
            return subFunc(x, count)
        else: # odd number
            count += 1
            x = 3 * x + 1
            return subFunc(x, count)

    return subFunc(n, count)

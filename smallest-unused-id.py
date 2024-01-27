'''
Smallest unused ID
Codewars
8kyu

Description:


Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
Fundamentals
Algorithms
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a list of numbers
# Results - return the first unused number in the list
# Example - 0,1,2,3,5 -> 4
# Pseudocode:
#   sort the list
#   for index, x in enumerate(range(0, len(list - 1)))
#       if index != x:
#           return x - 1

def next_id(arr):
    arr.sort()
    complete = range(0,len(arr)+1)
    result = [x for x in complete if not x in arr]
    return result[0]

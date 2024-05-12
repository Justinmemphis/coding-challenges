'''
Fuel Calculator: Total Cost
Codewars
8kyu

Description:


In this kata you will have to write a function that takes litres and price_per_litre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!
Note

1 Dollar = 100 Cents
Mathematics
Fundamentals
Logic
'''
# 2 4  6  8  10 
# 5 10 15 20 25

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive total litres and price per litre
# Results - return total cost, with discount figured in
# Example - see test cases
# Pseudocode:
#   discount = min(total liters / 10 * .25)
#   return (total litres * (price per litre - discount))

def fuel_price(litres, price_per_litre):
    l = litres
    discount = 0
    if l >= 10:
        discount = 0.25
    elif l >= 8:
        discount = 0.20
    elif l >= 6:
        discount = 0.15
    elif l >= 4:
        discount = 0.10
    elif l >= 2:
        discount = 0.05
    else:
        discount = 0
    return round(litres * (price_per_litre - discount),2)


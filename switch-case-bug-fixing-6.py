'''
Switch/Case - Bug Fixing #6
Codewars
8kyu

Description:

Switch/Case - Bug Fixing #6

Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
Debugging
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# all n/a - simple debugging exercise

def eval_object(v):
    match v["operation"]:
        case '+':
            return v["a"] + v["b"]
        case "-":
            return v["a"] - v["b"]
        case "/":
            return v["a"] / v["b"]
        case "*":
            return v["a"] * v["b"]
        case "%":
            return v["a"] % v["b"]
        case "**":
            return v["a"] ** v["b"]
        case _:
            return 1

'''
Crash Override
Codewars
8kyu

Description:


Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples

# These two dictionaries are preloaded, you need to use them in your code
FIRST_NAME = {'A': 'Alpha', 'B': 'Beta', 'C': 'Cache', ...}
SURNAME = {'A': 'Analogue', 'B': 'Bomb', 'C': 'Catalyst' ...}

alias_gen('Larry', 'Brentwood') == 'Logic Bomb'
alias_gen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'

Happy hacking!
Strings
Fundamentals
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive two strings
# Results - if both strings are letters, return mapping; otherwise return phrase
# Example - see above
# Pseudocode:
#   if string[0] type isn't char and string1[0] isn't char
#       return phrase
#   else
#       return phrase 1 phrase 2

# didn't solve - see favorite solution below:

def alias_gen(f_name, l_name):
    try:
    	return FIRST_NAME[f_name.upper()[0]]+' '+SURNAME[l_name.upper()[0]]
    except:
    	return 'Your name must start with a letter from A - Z.'

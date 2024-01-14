'''
1678. Goal Parser Interpretation
Easy
Topics
Companies
Hint

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.



Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"



Constraints:

    1 <= command.length <= 100
    command consists of "G", "()", and/or "(al)" in some order.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
225.7K
Submissions
259.6K
Acceptance Rate
86.9%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string
# Results - return the string with three different sequences replaced with distint sequences
# Example - see above
# Pseudocode:
#   iterate over the string, replacing with the values you are looking for

class Solution:
    def interpret(self, command: str) -> str:
        guide = {'()': 'o', '(al)': 'al'}
        for x,y in guide.items():
            command = command.replace(x, y)
        return command

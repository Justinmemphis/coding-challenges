'''
1108. Defanging an IP Address
LeetCode
Easy

Description:
    1108. Defanging an IP Address
Easy
Topics
Companies

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".



Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"



Constraints:

    The given address is a valid IPv4 address.

Seen this question in a real interview before?
1/4
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string that is a valid IPv4 address
# Results - return the IP address with . replaced with [.]
# Example - see above
# Pseudocode - replace . in string with [.]

class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")

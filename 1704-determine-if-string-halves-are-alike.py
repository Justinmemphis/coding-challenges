'''
1704. Determine if String Halves Are Alike
Easy
Topics
Companies
Hint

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.



Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.



Constraints:

    2 <= s.length <= 1000
    s.length is even.
    s consists of uppercase and lowercase letters.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
218.4K
Submissions
281.3K
Acceptance Rate
77.6%
'''

# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a string - divide it into two
# Results - count how many vowels are in each half - if equal number of values return True else return False
# Example - see above
# Pseudocode:
#   create result variable
#   iterate over the string to half length
#       if vowel
#           increment result
#   iterate over second half of string
#       if vowel
#           decrement result
#   return result == 0

class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        result = 0
        vowels = 'aeiouAEIOU'
        midpoint = int(len(s)/2)
        for x in range(0, midpoint):
            if s[x] in vowels:
                result += 1
        for x in range(midpoint, midpoint*2):
            if s[x] in vowels:
                result -= 1
        return result == 0

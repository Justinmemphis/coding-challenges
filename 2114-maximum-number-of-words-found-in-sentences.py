'''
2114. Maximum Number of Words Found in Sentences
Easy
Topics
Companies
Hint

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.



Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation:
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words.
In this example, the second and third sentences (underlined) have the same number of words.



Constraints:

    1 <= sentences.length <= 100
    1 <= sentences[i].length <= 100
    sentences[i] consists only of lowercase English letters and ' ' only.
    sentences[i] does not have leading or trailing spaces.
    All the words in sentences[i] are separated by a single space.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
250.4K
Submissions
289.9K
Acceptance Rate
86.4%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - given an array of sentences (word separated by a space)
# Results - return max words in a sentence (in the array)
# Example - see above
# Pseudocode:
#   create max variable at 0
#   iterate over the array
#       separate sentence by word
#       if length of subarray greater than max
#           set new max
#   return max

class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxValue = 0
        for x in sentences:
            a = len(x.split())
            if a > maxValue:
                maxValue = a
        return maxValue

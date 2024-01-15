'''
2225. Find Players With Zero or One Losses
Medium
Topics
Companies
Hint

You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

    answer[0] is a list of all players that have not lost any matches.
    answer[1] is a list of all players that have lost exactly one match.

The values in the two lists should be returned in increasing order.

Note:

    You should only consider the players that have played at least one match.
    The testcases will be generated such that no two matches will have the same outcome.



Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].



Constraints:

    1 <= matches.length <= 105
    matches[i].length == 2
    1 <= winneri, loseri <= 105
    winneri != loseri
    All matches[i] are unique.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
126.9K
Submissions
176.7K
Acceptance Rate
71.8%
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive an array of winning/loss games
# Results - return an array of zero loss numbers and one loss numbers, sorted in increasing order
# Example - see above
# Pseudocode:
#   create first digit array (winners)
#   create second digit array (losers)
#   create winners-zero
#   create winners-one
#   for x in winners:
#       if losers does not include x:
#           add to winners-zero
#       elif losers count x == 1:
#           add to winners-one
#   return winners-zero.sorted, winners-one.sorted
#
#   didn't solve - favorite solution below:

class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        # Convert matches to [[winner, winner, ...], [loser, loser, ...]]
        wl = list(zip(*matches))

        # Initialize lostZero to all winners.
        # We will remove a winner if he/she loses a match.
        lostZero = set(wl[0])

        # We will append if he/she lost exactly one match.
        lostOne = []

        # count the number of matches he/she losts.
        countLost = Counter(wl[1])


        for key in countLost.keys():
            # Remove a winner if he/she lost a match.
            if countLost[key] > 0 and key in lostZero: lostZero.remove(key)
            # Append if he/she lost exactly one match.
            if countLost[key] == 1: lostOne.append(key)

        # Sort the two lists before return
        return [sorted(list(lostZero)),sorted(lostOne)]




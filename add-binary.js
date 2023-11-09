/* 67. Add Binary
 * LeetCode
 * Easy
 *
 * Description:
 67. Add Binary
Solved
Easy
Topics
Companies

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
1.3M
Submissions
2.4M
Acceptance Rate
52.8%
*/

// done as part of CodeCrew coding challenge night
// my solution (partly from stack overflow):

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let decimal1 = BigInt('0b' + a);
    let decimal2 = BigInt('0b' + b);
    return (decimal1 + decimal2).toString(2);
};

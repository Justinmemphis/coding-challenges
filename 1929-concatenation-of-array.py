'''
1929. Concatenation of Array
LeetCode
Easy

Description:
    1929. Concatenation of Array
Easy
Topics
Companies
Hint

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.



Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]



Constraints:

    n == nums.length
    1 <= n <= 1000
    1 <= nums[i] <= 1000

Seen this question in a real interview before?
1/4
Yes
No
Accepted
603.7K
Submissions
674.1K
Acceptance Rate
89.6%
Topics
Array
Companies
Hint 1
Build an array of size 2 * n and assign num[i] to ans[i] and ans[i + n]
Discussion (57)
💡 Discussion Rules

1. Please don't post any solutions in this discussion.

2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.

3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.
user0291zt
Sep 08, 2021

return nums+nums;
18
Show 1 Replies
Reply
wtsang01
50 Days Badge 2022
Nov 13, 2021

This just seems too easy of an question to be asked, even for a first phone interview. So any one actually get these type of questions on their interview?
If so, where? what position?
13
Show 6 Replies
Reply
kumarsandeep12192
Jan 04, 2023

Simple Solution :)

class Solution {
public int[] getConcatenation(int[] nums) {

    int[] ans = new int[2*nums.length];

    for(int i=0;i<nums.length;i++) {
        ans[i] = nums[i];
        ans[i+nums.length] = nums[i];
    }
    return ans;

:)
Read more
11
Show 3 Replies
Reply
Kiirynn
50 Days Badge 2023
Jun 18, 2023

They find the most overcomplexified ways to ask a question on this website, just make two twin nums arrays, concat them and return it lmao. save you the headache
7
Reply
Raja_Sharma
Jan 04, 2023

class Solution {
public int[] getConcatenation(int[] nums) {
final int n = nums.length;

    int[] ans = new int[n * 2];

    for(int i=0; i<n; i++){
        ans[i] = ans[i+n] = nums[i];
    }
    return ans;
}

}
Read more
6
Show 1 Replies
Reply
MrSucre
Jun 15, 2023

This needs a lot of details i couldn't even understand the question!!!!!!!
Ask Question
5
Show 1 Replies
Reply
kirillq
100 Days Badge 2023
Jul 02, 2023

easiest problem so far 🤣
3
Reply
creativerahuly
Algorithm I
Apr 12, 2022

let getConcatenation = nums => nums.concat(nums)
3
Reply
imraklr
100 Days Badge 2023
Aug 04, 2023

Oh yes the native implementation of the System.arrayCopy method. Correct if I am wrong. Bang your head for that 0 millisecond performance. LOL
2
Reply
pyush98
100 Days Badge 2023
Jun 14, 2023

good question to use mod for newbies
2
Reply
Copyright ©️ 2023 LeetCode All rights reserved
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# n/a above - just added two together

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums

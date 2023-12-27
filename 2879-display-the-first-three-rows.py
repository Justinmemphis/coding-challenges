'''
2879. Display the First Three Rows
Leetcode
Easy

Description:
    Easy
Companies
Hint

DataFrame: employees
+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| employee_id | int    |
| name        | object |
| department  | object |
| salary      | int    |
+-------------+--------+

Write a solution to display the first 3 rows of this DataFrame.



Example 1:

Input:
DataFrame employees
+-------------+-----------+-----------------------+--------+
| employee_id | name      | department            | salary |
+-------------+-----------+-----------------------+--------+
| 3           | Bob       | Operations            | 48675  |
| 90          | Alice     | Sales                 | 11096  |
| 9           | Tatiana   | Engineering           | 33805  |
| 60          | Annabelle | InformationTechnology | 37678  |
| 49          | Jonathan  | HumanResources        | 23793  |
| 43          | Khaled    | Administration        | 40454  |
+-------------+-----------+-----------------------+--------+
Output:
+-------------+---------+-------------+--------+
| employee_id | name    | department  | salary |
+-------------+---------+-------------+--------+
| 3           | Bob     | Operations  | 48675  |
| 90          | Alice   | Sales       | 11096  |
| 9           | Tatiana | Engineering | 33805  |
+-------------+---------+-------------+--------+
Explanation:
Only the first 3 rows are displayed.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
21.2K
Submissions
23.2K
Acceptance Rate
91.6%
Companies
Hint 1
Consider using a built-in function in pandas library to retrieve the initial rows.
Discussion (1)
💡 Discussion Rules

1. Please don't post any solutions in this discussion.

2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.

3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.
aiyappa18
100 Days Badge 2023
Oct 13, 2023

just return the head(no of rows) as specified.
3
Reply
Copyright ©️ 2023 LeetCode All rights reserved
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - receive a data frame
# Results - return the first three rows of the data frame
# Example, Pseudocode - n/a

import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    df = pd.DataFrame(employees)
    return df.loc[[0,1,2]]


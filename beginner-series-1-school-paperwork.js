/* Beginner Series #1 - School Paperwork
 * 8kyu
 *
 * Description:
 

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

Waiting for translations and Feedback! Thanks!
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a value n and a value m, numbers negative to positive
// Results - if either m or n is negative return 0; else return m times n
// Pseudocode:
// 	if m less than zero or n less than zero
// 		return zero
// 	else
// 		return m times n

function paperwork(n, m) {
	return n < 0 || m < 0 ? 0 : m * n;
}

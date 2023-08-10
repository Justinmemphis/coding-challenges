/* Quarter of the year
 * 8kyu
 *
 * Description:
 

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

    1 <= month <= 12

Fundamentals
Mathematics
*/

// Solution:
// PREP - Paramters, Results, Example, Pseudocode
// Paramters - receive a number from 1 to 12
// Results - return which quarter of the year it is (as a digit, like 1,2,3,4)
// Example - 2 -> 1
// Pseudocode:
// 	first quarter
// 	second quarter
// 	third quarter
// 	fourth quarter
//
// 	basically convert base 12 to base 4

const quarterOf = (month) => {
	return Math.ceil((month/12) * 4);
};

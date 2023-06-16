/* Century From Year
 * 8kyu
 *
 * Description:
 
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
Fundamentals
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number from 0 to 3000
// Results - return the century the year is in
// Example - 1776 -> 18
// Pseudocode:
// 	if the year is a hundred
// 		return thousands and hundreds digit (Math floor hundred)
// 	else
// 		return thousands and hundreds digit plus one (Math floor hundred)

function century(year) {
	if (year % 100 === 0) {
		return Math.floor(year / 100);
	} else {
		return (Math.floor(year/100) + 1);
	};
}

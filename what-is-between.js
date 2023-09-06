/* What is between?
 * 8kyu
 *
 * Description:
 

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

Fundamentals
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers
// Results - return an array of integers between the two input integers
// Example - 1,4 -> 1,2,3,4
// Pseudocode:
// 	iterate from integer 1 to integer 2 and add to array

function between(a, b) {
	let result = [];
	for (let i = a; i <= b; i++) {
		result.push(i);
	};
	return result;
};

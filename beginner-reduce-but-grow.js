/*
 Beginner - Reduce but Grow
 8kyu
 
 Description:


Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Fundamentals
Arrays
*/

// Solution:

// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - given an array of integers.  Not empty (so not zero).  Just numbers.
// Results - return the result of multiplying all of the integers together
// Examples - [3,4,5] = 3 * 4 * 5 = 60
// Pseudocode:
// 	create result value
// 	iterate over the array
// 		for each value, multiply result by the new value
// 	return result

function grow(x) {
	let result = x[0];
	for (var i = 1; i < x.length; i++) {
		result = result * x[i];
	};
	return result;
}

/*
Calculate average
8kyu

Description:



Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
Fundamentals
Arrays
*/

// Solution:

// PREP - Paramaters, Returns, Examples, Pseudocode
// Paramaters - an array with a list of numbers; it is possible there is an empty array
// Returns - returns single number (or zero)
// Examples - [2,4,6] => returns 4
// Pseudocode:
// 	create sum element;
// 	iterate over array adding elements to sum element
// 	return sum element divided by length of array

function findAverage(array) {
	// your code here
	let sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	};
	let average = 0;
	if (sum > 0) {
		average = sum / array.length;
	}
	return average;
}

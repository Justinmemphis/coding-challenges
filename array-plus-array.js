/*
 Array plus array
 8kyu

 Description:


I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
Fundamentals
Arrays
Debugging
*/

// Solution:
// PREP - Paramters, Results, Examples, Pseudocode
// Parameters - receive two arrays which only contain integer numbers
// Results - return a number output
// Examples - [1,3] + [5, 7] returns 16
// Pseudocode:
// 	create sum variable
// 	iterate over array one and add to sum variable
// 	iterate over array two and add to sum variable
// 	return sum variable

function arrayPlusArray(arr1, arr2) {
	let result = 0;

	for (var i = 0; i < arr1.length; i++) {
		result += arr1[i];
	};

	for (var i = 0; i < arr2.length; i++) {
		result += arr2[i]
	};

	return result;
}


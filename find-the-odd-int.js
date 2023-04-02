/* Find the odd int
 * 6kyu
 *
 * Description:
 

 Given an array of integers, find the one that appears an odd number of times.

 There will always be only one integer that appears an odd number of times.
 Examples

 [7] should return 7, because it occurs 1 time (which is odd).
 [0] should return 0, because it occurs 1 time (which is odd).
 [1,1,2] should return 2, because it occurs 1 time (which is odd).
 [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 Fundamentals
 */

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of integers; one element is in there an odd number of times
// Results - return the element that is there an odd number of times
// Examples - (1,2,2) -> 2; (1,2,2,3,3) -> 1
// Pseudocode:
// 	create result number
// 	iterate over the array
// 		create copy of the array
// 		filter the array for that element
// 		if the new array length is odd
// 			result equals that number
// 	return result number

function findOdd(A) {
	let result = 0;
	for (var i = 0; i < A.length; i++) {
		let copy = [...A];
		copy = copy.filter(number => number == A[i]);
		if (copy.length % 2 != 0) {
			result = copy[0];
		};
	};
	return result;
}


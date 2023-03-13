/* Sum of differences in an array
 * 8kyu
 * Description:
 


Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Paramaters - receive an array with zero, one, or more numbers
// Results - return the sum of the differences between the elements (if more than one element)
// Examples - [1,3,5] -> (5-3) + (3-1) = 4
// Pseudocode:
// 	if array has zero or one elements
// 		return zero
// 	else
// 		create sum variable
// 		iterate over array from end to beginning second element
// 			add to sum variable current element less prior element
// 		return sum variable

function sumOfDifferences(arr) {
		if (arr === []) {
		return 0;
	} else if (arr.length === 1) {
		return 0;
	} else {
		let sum = 0;
		for (var i = 1; i < arr.length; i++) {
			sum += arr[i] - arr[i-1];
		};
		return sum;
	}

}

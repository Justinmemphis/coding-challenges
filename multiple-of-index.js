/* Multiple of index
 8kyu

 Description:


Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of numbers; the array is greater than one number
// Results - return numbers which are multiples of their own index in the array
// Examples - [2,1,2] -> [1,2]
// Pseudocode: 
// 	create result array
// 	iterate over the array
// 		if current element modulo current element iteration value equals zero
// 			add current element to result array
// 	return result array

function multipleOfIndex(array) {
	let result = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] % [i] === 0) {
			result.push(array[i]);
		};
	};
	return result;
}

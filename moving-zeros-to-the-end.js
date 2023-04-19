/* Moving Zeros To The End
 * 5kyu
 *
 * Description:
 

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Arrays
Sorting
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Paramters - receive an array containing many elements
// Results - take all zeros from the array and move them to the end of the array (preserving order of everything else)
// Example - [a,4,5,0,3] -> [a,4,5,3,0]
// Pseudocode:
// 	create result array
// 	create temp array
// 	iterate over the given array
// 		if the value equals zero
// 			push to the temp array
// 		else
// 			puse to the result array
// 	push temp array to result array
// 	return result array

function moveZeros(arr) {
	let result = [];
	let temp = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			temp.push(arr[i]);
		} else {
			result.push(arr[i]);
		};
	};
	for (var i = 0; i < temp.length; i++) {
		result.push(temp[i]);
	};
	return result;
}

/* Sort the odd
 * 6kyu
 *
 * Description:
 
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Fundamentals
Arrays
Sorting
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers
// Results - return the array with the odd numbers sorted in ascending order but the even numbers left in place
// Example - [5,8,6,3,4] -> [3,8,6,5,4]
// Pseudocode:
// 	create result variable
// 	create oddNumber variable
// 		iterate over the array and pull out all oddNumbers
// 		sort oddNumbers
// 	iterate over the original array
// 		if odd
// 			shift oddNumber to result
// 		else
// 			add to result
// 	return result

function sortArray(array) {
	let result = [];
	let oddN = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2) { // find the odd numbers
			oddN.push(array[i]);
		};
	};
	oddN = oddN.sort((a,b) => a - b);
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2) { // if number is odd
			result.push(oddN.shift());
		} else { // if number is even
			result.push(array[i]);
		};
	};
	return result;
}














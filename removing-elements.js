/* Removing Elements
 * Description:
 *

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
Lists
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array; array is never empty; array has at least two elements
// Returns - return the array with every second element missing
// Examples - ['hello','goodbye','hello','goodbye'] --> ['hello','hello']
// Pseudocode:
// 	create result array
// 	iterate over the array starting at the first element and iterating by two from there
// 		add array element to result array

function removeEveryOther(arr) {
	let result = [];
	for (var i = 0; i < arr.length; i = i + 2) {
		result.push(arr[i]);
	};
	return result;
}

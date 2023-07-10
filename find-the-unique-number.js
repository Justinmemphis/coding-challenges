/* Find the unique number
 * 6kyu
 *
 * Description:
 

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

Fundamentals
Algorithms
Arrays
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array with numbers
// Results - return the unique number
// Example - [1,1,1,2,1,1] -> 2
// Pseudocode:
// 	create result object
// 	iterate over the array
// 		if result includes object
// 			object value++
// 		else
// 			add to object
// 	return where object value equals one
//

// didn't solve - see solution below

// what I started to do: (but it didn't work for zero)

function findUniq(arr) {
	let result = {};
	for (let i = 0; i < arr.length; i++) {
		result[arr[i]] = result[arr[i] + 1] || 1;
	};
	return;
}

// working solution I like:
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}























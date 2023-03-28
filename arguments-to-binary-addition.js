/* Arguments to binary addition
 * 8kyu
 *
 * Description:
 


Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

This is a modification on the Kata: Array2Binary addition hope you like it
Arrays
Binary
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array with several different elements
// Results - return the sum of all number elements (in binary)
// Examples - [1,2,3,'b'] -> binary version of 6
// Pseudocode:
// 	if array is empty
// 		return 0
// 	create sum number
// 	iterate over the array
// 		if the element is a string or NaN -> do nothing
// 		else add the number to the sum number
// 	convert sum number to binary
// 	return sum

function arr2bin(arr){
	if (arr === []) {
		return 0;
	} else {
		let sum = 0;
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] === 'number' && arr[i] != 'NaN') {
                          sum += arr[i];
                        };
		};
		sum = Number(sum).toString(2);
		return sum;
	};
}

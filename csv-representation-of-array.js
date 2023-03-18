/* CSV representation of array
 * 8kyu
 Description:



Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
Fundamentals
Arrays
Strings
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array (greater than 2 length); each element of the array is a line in a csv file
// Results - return a string of the array formatted like a CSV file
// Example - see above
// Pseudocode:
// 	create result string
// 	iterate over the array
// 		add each value (string of characters) to the result string
// 		at the end of each array add '\n' line break
// 	remove last '\n' line break
// 	return result string

function toCsvText(array) {
	let result = '';
	for (var i = 0; i < array.length; i++) {
		result += array[i] + '\n';
	};
	console.log('result post-iterate',result);
	result = result.substring(0,result.length-2);
	console.log('result post-chop',result);
	return result;
}

/* Is there a vowel in there?
 * 8kyu
 Description:

 

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
Fundamentals
Strings
Arrays
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of numbers; some of the array numbers are vowel character codes
// Results - if there are vowel character codes for lower case vowels change those to vowel
// 	characters and return the array
// Examples - [101,121] -> ['e',121]
// Pseudocode:
// 	create result array
// 	iterate over the array
// 		if the array element matches the vowel code
// 			change to the vowel
// 			push to the result array
// 		else push to the result array
// 	return result array

function isVow(a){
	let result = [];
	for (var i = 0; i < a.length; i++) {
		switch (a[i]) {
			case 97:
				result.push('a');
				break;
			case 101:
				result.push('e');
				break;
			case 105:
				result.push('i');
				break;
			case 111:
				result.push('o');
				break;
			case 117:
				result.push('u');
				break;
			default:
				result.push(a[i]);
				break;

		}
	};
	return result;
}

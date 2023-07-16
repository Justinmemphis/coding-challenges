/* Reverse words
 * 7kyu
 *
 * Description:
 

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a sting
// Results - return the string with all words reversed
// Example - 'hello world' -> 'olleh dlrow'
// Pseudocode:
// 	create result array from split string
//	iterate over the array
//		create temp word
//		iterate over the word from back to front		
//			push the letters to the temp variable
//	return result array joined by a space

function reverseWords(str) {
	let temp = str.split(' ');
	let result = [];
	for (let i = 0; i < temp.length; i++) {
		let newWord = '';
		for (let j = temp[i].length - 1; j >= 0; j--) {
			newWord += temp[i][j];
		};
		result.push(newWord);
	};
	return result.join(' ');
}

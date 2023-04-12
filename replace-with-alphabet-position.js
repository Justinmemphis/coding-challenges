/* Replace With Alphabet Position
 * 6kyu
 *
 * Description:
 *
 

 Welcome.

 In this kata you are required to, given a string, replace every letter with its position in the alphabet.

 If anything in the text isn't a letter, ignore it and don't return it.

 "a" = 1, "b" = 2, etc.
 Example

 alphabetPosition("The sunset sets at twelve o' clock.")

 Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 Strings
 Fundamentals
 */

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of characters
// Results - return a string of the numbers for each character in the alphabet
// Example - 'abc' -> '1 2 3'
// Psuedocode:
// 	create result string
// 	create alphabet object with letter and number
// 	iterate over the string
// 		for each item in the string convert it to a number
// 		add that number to result string
// 	return result string

function alphabetPosition(text) {
	let result = '';
	text = text.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var i = 0; i < text.length; i++) {
		if (alphabet.includes(text[i])) {
			result = result + (alphabet.indexOf(text[i]) + 1) + ' ';
		};
	};
	result = result.slice(0,result.length-1);
	return result;
}











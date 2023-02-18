/*
Fake Binary
8kyu

Description:



Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
Fundamentals
Strings
Arrays
*/

// Solution:

// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive a string of digits; no empty string will be sent
// Returns = return the string with the digits changed
// Examples = '123456789' returns '000011111'
// Pseudo code:
// 	create new string variable
// 	iterate over the string, pushing to the new string the changed value

function fakeBin(x) {
	let result = '';
	for (var i = 0; i < x.length; i++) {
		if (x.charAt(i) < 5) {
			result += '0';
		} else {
			result += '1';
		}
	};
	return result;
}


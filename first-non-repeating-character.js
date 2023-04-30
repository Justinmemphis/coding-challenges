/* First non-repeating character
 * 5kyu
 *
 * Description:
 


Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string of letters
// Results - return the first non-repeated string
// Examples - 'moonmen' -> 'e'
// Pseudocode:
//	iterate over the string
//		create temp variable equals current element
//		match temp variable over the string
//		if temp equals one
//			return element
//	return empty string

function firstNonRepeatingLetter(s){
	let z = s.toLowerCase();
        for (var i = 0; i < z.length; i++) {
        	let temp = new RegExp(z[i], 'g');
        	let count = z.match(temp || []).length;
                if (count == 1) {
                	return s[i];
                };
        };
        return '';
}

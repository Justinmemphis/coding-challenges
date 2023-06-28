/* Detect Pangram
 * 6kyu
 *
 * Description:
 

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
Strings
Data Structures
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return true if the string contains all alphabet characters
// Example - see above
// Pseudocode:
// 	create copied string that is string all lower-case
// 	create a-z regex
// 	return test of a-z regex

function isPangram(string){
	        let alpha = 'abcdefghijklmnopqrstuvwxyz';
        string = string.toLowerCase();
        for (var i = 0; i < alpha.length; i++) {
                if (!string.includes(alpha[i])) {
                        return false;
                };
        };
        return true;
}

/* Disemvowel Trolls
 * 7kyu
 *
 * Description:
 

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
Strings
Regular Expressions
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameter - receive a string
// Results - return the string without vowels
// Example - 'hello' -> 'hll'
// Pseuodocode:
// 	create result string
// 	create regex for non-vowel
// 	iterate over the string
// 		if the character is not a vowel
// 			add to result string
// 	return result string

function disemvowel(str) {
	let result = '';
	let regex = /^[^aeiouAEIOU]+$/g;
	for (var i = 0; i < str.length; i++) {
		let x = str.charAt(i);
		if (x.match(regex)) {
			result += x;
		};
	};
	return result;
}

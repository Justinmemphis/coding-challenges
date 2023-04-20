/* Simple Pig Latin
 * 5kyu
 
 Description:


Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Regular Expressions
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Paramters - receive a string with several words
// Results - return the same string with all words modified - first letter moved to the back and then 'ay' added
// 	to the end of each word
// Example - 'hey there friend' -> 'eyhay heretay riendfay'
// Pseudocode:
// 	create result array equals the string separated by spaces
// 	for each word (element in result array)
// 		if punctuation
// 			(do nothing)
// 		else
// 			word = element sliced element 1 to end plus element 0 plus 'ay'
// 	return result array joined

function pigIt(str){
	let result = str.split(' ');
	let regex = /[.,!;:?]/g;
	for (var i = 0; i < result.length; i++) {
		if (regex.test(result[i])) {
		} else {
			result[i] = result[i].slice(1,result[i].length) + result[i][0] + 'ay';
		};
	};
	return result.join('');
}

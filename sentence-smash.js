/*
Sentence Smash
8kyu

Description:
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

Strings
Arrays
Fundamentals
*/

// Solution:
// PREP - Paramters, Results, Examples, Pseudocode
// Paramters - receive an array of strings
// Results - put strings together in one string separated by spaces
// Examples - ["my", "dog", "nemo"] => "my dog nemo"
// Pseudocode:
// 	create result string
// 	iterate over array adding each element to the string with a space
// 	remove last space
// 	return result string

function smash (words) {
	let result = "";
	for (var i = 0; i < words.length; i++) {
		result += `${words[i]} `;
	};
	result = result.substring(0, result.length - 1);
	return result;
}

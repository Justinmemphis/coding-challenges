/* Split Strings
 * 6kyu
 *
 * Description:
 

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

Regular Expressions
Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return an array of the string in two-letter characters - if odd return an underscore at the end
// Example - 'def' -> ['de','f_']
// Pseudocode:
// 	create result array
// 	if string is odd
// 		add underscore to end of string
// 	iterate over the string by 2
// 		add each substring to result
// 	return result

function solution(str){
	let result = [];

	if (str.length % 2 != 0) { // if odd length add underscore to end
		str += '_';
	};

	for (let i = 0; i < str.length; i += 2) { // iterate 2 at a time and add to result
		result.push(str[i] + str[i+1]);
	};

	return result;

}

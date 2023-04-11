/* Duplicate Encoder
 * 6kyu
 *
 * Description:
 *
 

 The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 Examples

 "din"      =>  "((("
 "recede"   =>  "()()()"
 "Success"  =>  ")())())"
 "(( @"     =>  "))((" 

 Notes

 Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 Strings
 Arrays
 Fundamentals
 */

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return a string with ( for unique string items 
// 	and ) for non-unique string items
// Examples - 'hello' -> '(())('
// Pseudocode:
// 	create result string
// 	iterate over the string
// 		if the selected character is unique
// 			concat ( to result string
// 		else
// 			concat ) to result string
// 	return result string

function duplicateEncode(word){
	return word
		.toLowerCase()
		.split('')
		.map( function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
		})
		.join('');
}







/* String ends with?
 * 7kyu
 *
 * Description:
 

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return true if a given string ends with the given string
// Example - 'abc', 'bc' -> true
// Pseudocode
// 	return string === string.slice(string.length-1,string.length)

function solution(str, ending){
	return ending === str.slice(str.length-ending.length,str.length);
}

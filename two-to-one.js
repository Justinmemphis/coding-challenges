/* Two to One
 * 7kyu
 *
 * Description:
 

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings of letters (string a and string b)
// Results - return a sorted string of letters that are present in both a and b
// Example - see above
// Pseudocode:
// 	create result string
// 	sort a string
// 	sort b string
// 	iterate over a string
// 		iterate over b string
// 			if a string == b string
// 				add to result string
// 	return result string

function longest(s1, s2) {
	      let temp = s1+s2;
      temp = temp.split('').sort().join('');
      return [...new Set(temp)].join('');
}

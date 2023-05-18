/* Mumbling
 * 7kyu
 *
 * Description:
 

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
Fundamentals
Strings
Puzzles
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - export the string in a certain order
// Example - see above
// Pseudocode:
// 	create result string equals capital letter charat 0
// 	iterate over the string length
// 		for each character
// 		add to result sting capital letter plus (string position times lowercase letter)

function accum(s) {
		        let result = s.charAt(0).toUpperCase() + '-';
        for (var i = 1; i < s.length; i++) {
                result += s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i) + '-';
        };
        return result.slice(0,result.length-1);
}













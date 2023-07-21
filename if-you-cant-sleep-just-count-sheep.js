/* If you can't sleep, just count sheep!
 * 8kyu
 *
 * Description:
 

If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive integer
// Results - return string with number plus "sheep..."
// Example - 2 -> "1 sheep...2 sheep..."
// Pseudocode:
// 	if zero
// 		return zero
// 	create result string
// 	for numbers up to num
// 		add number plus sheep to result string
// 	return result string

var countSheep = function (num){
	if (num === 0) {
		return "";
	} else {
		let result = "";
		for (let i = 1; i <= num; i++) {
			result = result + i + " sheep...";
		};
		return result;
	};
}

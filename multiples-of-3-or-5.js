/* Multiples of 3 or 5
 * 6kyu
 * Description:
 *
 *

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
Mathematics
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a number, 0 or higher
// Results - find all of the multiples of 3 or 5 that go into the number - return the sum of those numbers
// Examples - (10) -> 23
// Pseudocode:
// 	create result number
// 	iterate over the numbers from zero to the number
// 		if the number is divisible by 3 or 5 or both
// 			add it to the result number
// 	return the result number

function solution(number){
	let result = 0;
	for (var i = 0; i < number; i++) {
		if (i % 3 === 0) {
			result += i;
		} else if (i % 5 === 0) {
			result += i;
		};
	};
	return result;
}

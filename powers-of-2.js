/* Powers of 2
 * 8kyu
 *
 * Description:
 

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a non-negative integer n
// Results - return an array of all powers of 2 of the integer
// Example - 4 -> 1,2,4,8,16
// Pseudocode:
// 	create result array
// 	iterate from zero to the integer
// 		add powers of 2 i to the result array
// 	return result array

function powersOfTwo(n){
	let result = [];
	for (let i = 0; i <= n; i++) {
		result.push(2 ** i);
	};
	return result;
};

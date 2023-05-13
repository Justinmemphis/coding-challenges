/* Integers: Recreation One
 * 5kyu
 *
 * Description:
 

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

The form of the examples may change according to the language, see "Sample Tests".
Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
Fundamentals
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a lower and upper bound for an integer range
// Results - return where the sum of the squared divisors is itself a square
// Example - see above
// Pseudocode:
// 	create result number
// 	iterate from lower bound to upper bound
//	 	generate divisors of number
// 		square the divisors
// 		sum the squares
// 		test if sum number is a square
// 			if so -> add [number, sum] to result
// 	return result

function listSquared(m, n) {
	let result = [];
	for (var i = m; i < n; i++) {
		let divisors = [];
		for (var j = 1; j <= i; j++) {
			if (!(i % j)) {
				divisors.push(j * j);
			};
		};
		let sum = divisors.reduce((partialSum, a) => partialSum + a, 0);
		if (Math.sqrt(sum) % 1 === 0) {
			result.push([i, sum]);
		};
	};
	return result;
}












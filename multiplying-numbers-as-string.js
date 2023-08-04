/* Multiplying numbers as strings
 * 4kyu
 *
 * Description:
 

This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

    The arguments are passed as strings.
    The numbers may be way very large
    Answer should be returned as a string
    The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!
Strings
Big Integers
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings which are digits
// Results - multiply the two strings together and return a string
// Example - '30','69' -> '2070'
// Pseudocode:
// 	return (+number times +number) to string
//
// 	didn't solve - see partial solution below:

function multiply(a, b)
{
	let arrayA = a.split('');
	let arrayB = b.split('');

	let temp = 0;
	let result = 0;
	let carryoverTop = 0;
	let carryoverBottom = 0;

	function multiplyMe (x,y) {
		temp = +y.pop() || 0;
		for (let i = x.length-1; i >= 0; i--) {
			let temp2 = temp * +x[i];
			if (temp2 < 10) {
				result += temp2;
			} else {
				let temp3 = temp2.toString();
				carryoverTop = temp3[0];
				carryoverBottom = temp3[1];

			};
		};
	};

	multiplyMe(arrayA, arrayB);

	return result.toString();
}

// my favorite solution:

function multiply(a, b) {
	var res = [];
	for (var i = a.length - 1; i >= 0; i--) { // iterate from the end of the first number
		for (var j = b.length - 1; j >= 0; j--) { // iterated from the end of the second number
			var mul = a[i] * b[j] + (res[i + j + 1] || 0); // multiply numbers plus the remainder (from prior calculation)
			res[i + j + 1] = mul % 10; // remainder equals the multiple remainder divided by 10
			res[i + j] = Math.floor(mul / 10) + (res[i + j] || 0); // remainder i + j is the floor of the multiple plus the prior remainder
		}
	}
	return res.join("").replace(/^0+/, "")||"0"; // remove trailing zeros
}

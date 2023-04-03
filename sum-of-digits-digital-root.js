/* Sum of Digits / Digital Root
 * 6kyu
 *
 * Description:
 

 Digital root is the recursive sum of all the digits in a number.

 Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 Examples

     16  -->  1 + 6 = 7
        942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
	132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
	493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

	Mathematics
	Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a single non-negative integer
// Results - return the sum of the digits; if that sum is greater than one digit, call the function again
// Examples - 18 -> 1 + 8 = 9
// Pseudocode:
// 	create result number
//
// 	create function sum of digits
// 		create sum
// 		iterate over the given number
// 			add each digit to the sum variable
// 		if sum greater length than one
// 			call function again
// 		return sum
//
// 	return result

function digitalRoot(n) {
	let myN = String(n);
	let sum = 0;
	for (var i = 0; i < myN.length; i++) {
		sum += +myN.charAt(i);
	};
	if (sum > 9) {    
		sum = digitalRoot(sum);
	};
	return sum;
}








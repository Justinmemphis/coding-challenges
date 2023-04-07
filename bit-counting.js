/* Big Counting
 * 6kyu
 *
 * Description:
 

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
Bits
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a non-negative integer
// Results - (convert the number to binary) - and count the number of ones
// Examples - 1234 in binary is 10011010010 so it should return 5
// Pseudocode:
// 	create result variable which is binary version of parameter number
// 	convert the result to a string
// 	count the number of 1 digits in the string

var countBits = function(n) {
	let result = n.toString(2);
        let count = 0;
        for (var i = 0; i < result.length; i++) {
                if (result.charAt(i) === '1') {
                        count++;
                };
        };
        return count;
}

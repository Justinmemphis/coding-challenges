/* Sum of the Two Lowest Positive Integers
 * 7kyu
 *
 * Description:
 

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
Arrays
Fundamentals
*/

// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of at least 4 positive integers (no floats or non-negative integers)
// Results - return the sum of the two smallest integers
// Examples - see above
// Pseudocode:
// 	sort the array
// 	return the sum the first two elements

function sumTwoSmallestNumbers(numbers) {
	numbers = numbers.sort(function(a, b) { return a - b});
        return numbers[0] + numbers[1];
}

/* Find numbers which are divisible by a given number
 * 8kyu
 *
 * Description:
 

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers (integers) and a second number (integer)
// Results - return which elements in the array are divisible by the second number
// Example - 1,2,3,4,5,6 , 2 -> 2,4,6
// Pseudocode:
// 	create result array
// 	iterate over the given array
// 		if a divisor
// 			add to result array
// 	return result array
// 	
// 	(or a reduce function)

function divisibleBy(numbers, divisor) {
	return numbers.reduce((total, actualNumber) => {
		if (total % divisor === 0) {
			divisorArray.push(total);
		};
		return divisorArray;
	}, []);
};

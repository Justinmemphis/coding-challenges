/* Count Odd Numbers below n
 * 8kyu
 *
 * Description:
 

Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!
Performance
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer 1 or greater
// Results - return how many odd numbers are below that number
// Example - 15023 -> 7511
// Pseudocode:
// 	divide number by 2 and round down

function oddCount(n){
	return Math.floor(n/2);
};

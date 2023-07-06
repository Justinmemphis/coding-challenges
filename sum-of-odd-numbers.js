/* Sum of odd numbers
 * 7kyu
 *
 * Description:
 

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Arrays
Lists
Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of odd numbers
// Results - given a row, calculate the sum of the numbers in that row
// Example - 42 -> 74088
// Pseudocode:
// 	return 
//
// 	didn't solve - see favorite solution below

function rowSumOddNumbers(n) {
	return n*n*n
}

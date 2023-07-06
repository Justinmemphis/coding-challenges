/* Simple multiplication
 * 8kyu
 *
 * Description:
 

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - if odd multiply number by 9, otherwise multiple by 8
// Example: 2 -> 16
// Pseudocode
// 	return number % 2 = 0 ? number * 9 : number * 8

const simpleMultiplication = (number) => { return number % 2 === 0 ? number * 8 : number * 9; };

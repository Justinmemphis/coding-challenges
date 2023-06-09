/* Keep Hydrated!
 * 8kyu
 *
 * Description:
 

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

Algorithms
Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - round to the floor of half the number
// Example - 7.6 -> 3
// Pseudocode:
// 	return floor of number / 2

function liters(time) {
	return Math.floor(time/2);
}

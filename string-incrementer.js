/* String incrementer
 * 5kyu
 *
 Description:
 Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
Regular Expressions
Strings
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a string
// Results - return the string with the number increased by one (or if no number add a 1)
// Examples - see above
// Pseudocode:
// 	create new array equal to the split string between letters and numbers
// 	if no number
// 		return letters plus one
// 	else
// 		increase number by one
// 		return letters plus new number
//
// 	didn't solve - looked at solution

function incrementString (strng) {
	let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)	
}









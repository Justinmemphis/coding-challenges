/* Convert boolean values to strings 'Yes' or 'No'
 * 8kyu
 *
 Description:



Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a boolean value of either true or false
// Results - return Yes or No
// Examples - (true) -> Yes
// Pseudocode
// 	test if true - then return yes
// 		otherwise return no

function boolToWord( bool) {
	return bool === true ? 'Yes' : 'No';
}

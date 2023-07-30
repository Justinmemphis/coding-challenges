/* Grasshopper - Personalized Message
 * 8kyu
 *
 * Description:
 

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings
// Results - if the strings match return 'Hello boss' otherwise return 'Hello guest'
// Example - 
// Pseudocode:
//

function greet (name, owner) {
	return name === owner ? 'Hello boss' : 'Hello guest';
};

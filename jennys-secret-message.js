/* Jenny's secret message
 * 8kyu
 *
 * Description:
 

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return a certain response based on the input string
// Example - 'Jim' -> 'Hello, Jim!'; 'Johnny' -> 'Hello, my love!'
// Pseudocode:
// 	if name is johnny
// 		return hello my love
// 	else
// 		return hello name

function greet(name) {
	if (name === "Johnny") {
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	};
}

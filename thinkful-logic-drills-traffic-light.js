/* Thinkful - Logic Drills: Traffic light
 * 8kyu
 *
 * Description:
 

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Paramters - receive a string
// Results - return the next string in a sequence
// Example - 'green' -> 'yellow'
// Pseudocode:
// 	if green
// 		return yellow
// 	else if yellow
// 		return red
// 	else
// 		return green

function updateLight(current) {
	if (current === 'green') {
		return 'yellow';
	} else if (current === 'yellow') {
		return 'red';
	} else {
		return 'green';
	};
};

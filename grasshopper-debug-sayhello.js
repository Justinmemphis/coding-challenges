/* Grasshopper - Debug sayHello
 * 8kyu
 *
 * Description:
 
Debugging sayHello function

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a name string
// Results - return Hello plus the name string
// Example - 'Mr. Spock' -> 'Hello, Mr. Spock'
// Pseudocode:
// 	return Hello plus name

function sayHello(name) {
	return `Hello, ${name}`;
};

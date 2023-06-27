/* Are You Playing Banjo?
 * 8kyu
 *
 * Description:
 

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string (a name)
// Results - if the name starts with an r (case-insensitive) return one thing; else return another
// Example - 'rolf' - 'rolf plays banjo'
// Pseudocode
// 	if string[0] equals r or string[0] equals R
// 		return string + ' plays banjo'
// 	else
// 		return string + ' does not play banjo'

function areYouPlayingBanjo(name) {
	if (name[0] === 'r' || name[0] === 'R') {
		return name + ' plays banjo';
	} else {
		return name + ' does not play banjo';
	};
}

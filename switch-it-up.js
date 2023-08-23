/* Switch it Up!
 * 8kyu
 *
 * Description:
 

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer between 0-9
// Results - return the written out string of the number like "One"
// Example - 1 -> 'One'
// Pseudocode: use switch statement

function switchItUp(number){
	switch (number) {
		case 0:
			return 'Zero';
			break;
		case 1:
			return 'One';
			break;
		case 2:
			return 'Two';
			break;
		case 3:
			return 'Three';
			break;
		case 4:
			return 'Four';
			break;
		case 5:
			return 'Five';
			break;
		case 6:
			return 'Six':
			break;
		case 7:
			return 'Seven';
			break;
		case 8:
			return 'Eight';
			break;
		default: // case 9
			return 'Nine';
	};
};

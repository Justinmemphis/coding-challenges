/* UEFA EURO 2016
 * 8kyu
 * 
 * Description:
 *
 *

Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

Strings
Arrays
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an object with two specific sub-arrays.  The first array has two different soccer teams.
// 	The second array has the goals scored by each team.
// Results - return specific script based on who won or if there was a draw
// Examples - see above
// Pseudocode:
// 	see if draw
// 		then return team 1 - team 2, played draw
// 	else
// 		see if first team higher than second team
// 			then return "team 1 won"
// 		else
// 			return "team 2 won"

function uefaEuro2016(teams, scores) {
	if (scores[0] === scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
	} else {
		if (scores[0] > scores [1]) {
			return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
		} else {
			return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
		};
	};
}

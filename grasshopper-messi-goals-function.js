/* Grasshopper - Messi goals function
 * 8kyu
 *
 * Description:
 
Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive three numbers
// Results - return the sum of all three numbers
// Example - 43,10,5 -> 58
// Pseudocode:
// 	sum all three numbers

function goals (laLigaGoals, copaDelReyGoals, championLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};

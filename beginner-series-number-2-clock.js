/* Beginner Series #2 Clock
 * 8kyu
 *
 * Description:
 

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive hours, minutes, and seconds after midnight with constraints above
// Results - return milliseconds to midnight
// Example - 0, 1, 1 -> 61000
// Pseudocode:
// 	return (h * 3600000) + (m * 60000) + (s * 1000);

function past(h, m, s){
	return (h * 3600000) + (m * 60000) + (s * 1000);
}

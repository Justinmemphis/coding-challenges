/* Grasshopper - Grade book
 * 8kyu
 *
 * Description:
 
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
Fundamentals
*/

// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive three integers between 0 and 100
// Results - average the three scores and grade them based on letter grade rubric
// Example - 70,70,100 -> 'B'
// Pseudocode:
// 	create average variable which is three numbers added together divided by three
// 	create grade rubric
// 	return score against grade rubric

function getGrade (s1, s2, s3) {
	let avg = (s1 + s2 + s3) / 3;
	if (avg >= 90) {
		return 'A';
	} else if (avg >= 80) {
		return 'B';
	} else if (avg >= 70) {
		return 'C';
	} else if (avg >= 60) {
		return 'D';
	} else {
		return 'F';
	};
};

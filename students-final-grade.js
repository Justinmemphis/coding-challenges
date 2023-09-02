/* Student's Final Grade
 * 8kyu
 *
 * Description:
 

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

*Use Comparison and Logical Operators.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an exam number and number of completed projects
// Results - return grade for the student based on the input
// Example - 100,12 -> 100
// Pseudocode:
// 	if exam is greater than 90
// 		return 100
// 	else if projects greater than 10
// 		return 100
// 	else if exam greater than 75 and projects greater than 4
// 		return 90
// 	else if exam is greater than 50 and projects greater than 1
// 		return 75
// 	else
// 		return 0

function finalGrade (exam, projects) {
	if (exam > 90) {
		return 100;
	} else if (projects > 10) {
		return 100;
	} else if (exam > 75 && projects > 4) {
		return 90;
	} else if (exam > 50 && projects > 1) {
		return 75;
	} else {
		return 0;
	};
};









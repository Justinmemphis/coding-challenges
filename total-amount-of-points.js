/* Total Amount of Points
 8kyu

 Description:


Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

Fundamentals
Arrays
Strings
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive array with 10 values.  The values are pairs of integers with values between 0 and 4 separated by a ":"
// Results - return point value of each pair (testing greater than, less than, or equal conditions)
// Pseudocode:
// 	create result variable (number)
// 	iterate over each element in the array
// 		pull out first value and second value (separated by : )
// 		if x > y add 3 points to result
// 		else if X < y do nothing
// 		else (equality) add 1 point to result
// 	return result

function points(games) {
	let result = 0;
	for (var i = 0; i < games.length; i++) {
		let newArray = [];
		newArray = games[i].split(':');
		if (+newArray[0] > +newArray[1]) {
			result += 3;
		} else if (+newArray[0] < +newArray[1]) {			
		} else {
			result += 1;
		};
	};
	return result;
}

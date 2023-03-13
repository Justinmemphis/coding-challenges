/* How many stairs will Suzuki climb in 20 years?
 8kyu

 Description:


Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

Your function should return the 20 year estimate of the stairs climbed using the formula above.

Please also try the other Kata in this series..

    Help Suzuki count his vegetables...
    Help Suzuki purchase his Tofu!
    Help Suzuki pack his coal basket!
    Help Suzuki rake his garden!
    Suzuki needs help lining up his students!

Fundamentals
Arrays
*/

// Solution:
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array with seven subarrays.  Each of those subarrays has 52 different numbers.
// Returns - return the sum of the numbers in every subarray, then multiple total times 20 and return that number
// Examples - see test
// Pseudocode:
// 	create sum variable
// 	iterate over each array item
// 		for each array item iterate over subarray item
// 			add each value to sum variable
// 	return sum variable

function stairsIn20(s) {
	let sum = 0;
	for (var i = 0; i < s.length; i++) {
		for (var j = 0; j < s[i].length; j++) {
			sum += s[i][j];
		};
	};
	return (sum * 20);
}

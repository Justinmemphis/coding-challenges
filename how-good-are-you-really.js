/* How good are you really?
 * 8kyu
 *
 * Description:
 

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers and a specific number
// Results - return true if the specific number is larger than the array of numbers or false if otherwise
// Example - see above
// Pseudocode:
// 	create array that is the given array
// 	push specific number to given array
// 	create average of the given array
// 	return (specific > average)

function betterThanAverage(classPoints, yourPoints) {
        classPoints.push(yourPoints);
        let average = array => array.reduce((a, b) => a + b) / array.length;
        let classAverage = average(classPoints);
        return (yourPoints > classAverage);
}

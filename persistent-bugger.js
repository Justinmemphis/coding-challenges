/* Persistent Bugger
 * 6kyu
 *
 * Description:
 

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive a positive integer
// Results - return the number of times you multiple the digits until you get to a single digit
// Examples - 45 -> 2 (4*5 = 20, 2*0 = 0)
// Pseudocode:
// 	create count variable set at 1
// 	function counter
//	 	if number greater than one digit
//	 		count plus one
// 			create multiply variable = multiply digits against each other
// 			counter ( multiply variable )
// 	return count

function persistence(num) {
        let count = 0;
        function counter(myNumber) {
                let myString = myNumber.toString();
                if (myString.length > 1) {
                        count++;
                        let multiVar = myString[0];
                        for (var i = 1; i < myString.length; i++) {
                                multiVar *= +myString[i];
                        };
                        counter(multiVar);
                };
        };
        counter(num);
        return count;
}
















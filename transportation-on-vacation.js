/* Transportation on vacation
 * 8kyu
 *
 * Description:
 

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer number of days on vacation
// Results - return how much the cost of daily car rental is based on discounts
// 	multiplied by day
// Example - 2 -> 80
// Pseudocode:
// 	if greater than 6
// 		return days times 40 - 50
// 	if greater than 2
// 		return days times 40 - 20
// 	else
// 		return days * 40

function rentalCarCost(d) {
	if (d > 6) {
		return (d * 40) - 50;
	} else if (d > 2) {
		return (d * 40) - 20;
	} else {
		return d * 40;
	};
};











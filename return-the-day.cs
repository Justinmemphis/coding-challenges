/* Return the day
 * Codewars
 * 8kyu
 *
 * Description:
 

Complete the function which returns the weekday according to the input number:

    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - return the day for that number
// Example - see above
// Pseudocode:
// 	create array of days
// 	if input is > 0 and less < 8
// 		return array [value]
// 	else
// 		return wrong string above

public class Kata
{
  public static string WhatDay(int n)
  {
	  string[] days = { "zero","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" };
	  if (n > 0 && n < 8) {
		  return days[n];
	  }
	  else
	  {
		  return "Wrong, please enter a number between 1 and 7";
	  }
  }
}

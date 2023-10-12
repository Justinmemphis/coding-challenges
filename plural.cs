/* Plural
 * 8kyu
 *
 * Description:
 

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - return true if number plural else return false
// Example - 1 -> false
// Pseudocode:
// 	if number equals 1
// 		return false
// 	else
// 		return true

public class Kata
{
  public static bool Plural(double n)
  {
    if (n == 1)
      {
      return false;
    }
    else
      {
      return true;
    }
  }
}

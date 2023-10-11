/* Bin to Decimal
 * 8kyu
 *
 * Description:
 

Complete the function which converts a binary number (given as a string) to a decimal number.
Binary
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a binary number as a string
// Results - return that binary number as a decimal number
// Example - "11" -> 3
// Pseudocode:
// 	return string converted to decimal

using System;

namespace Solution
{
  public static class Program
  {
    public static int binToDec(string s)
    {
      return Convert.ToInt32(s, 2);
    }
  }
}

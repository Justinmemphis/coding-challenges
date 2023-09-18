/* Super Duper Easy
 * 8kyu
 *
 * Description:
 

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a value that is an integer or a double
// Results - if double multiple the value by 50 and increase it by 6; else return error
// Example - "5" -> "256"
// Pseudocode
// 	if a double
// 		return number multiplied by 50 and increased by 6
// 	else
// 		return "Error"

using System;

public class Kata
{
  public static string Problem(String a)
  {
    if(double.TryParse(a, out double d))
    {
      double result = d;
      result = result * 50 + 6;
      return result.ToString();   
    }
    else
      {
      return "Error";
    }
  }
}





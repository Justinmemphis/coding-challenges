/* Area of a Square
 * Codewars
 * 8kyu
 *
 * Description:
 

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
Fundamentals
Mathematics
Geometry
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive the length of the circular arc A
// Results - return the area to two decimals
// Example - n/a
// Pseudocode:
//

using System;

public class Kata
{
  public static double SquareArea(double A)
  {
    double result = Math.Pow(A / (0.5 * Math.PI), 2);
    return Math.Round(result, 2);
  }
}

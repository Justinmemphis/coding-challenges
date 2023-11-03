/* SpeedCode #2 - Array Madness
 * 8kyu
 *
 * Description:
 
SpeedCode #2 - Array Madness
Objective

Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

Kata.ArrayMadness(new int[] {4, 5, 6}, new int[] {1, 2, 3}) => true // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

Get your timer out. Are you ready? Ready, get set, GO!!!
Arrays
Puzzles
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two arrays of integers - both length 1 or more
// Results - see if sum of the squares of element a greater than cubes of element b
// Example 4,5,6 and 1,2,3 -> true
// Pseudocode:
// 	create square result
// 	for elements in array a
// 		iterate over array and add square of each number to result
// 	create cube result
// 	for elements in array b
// 		iterate over array and add cube of each number to result
// 	return square result > cube result

public class Kata
{
  public static bool ArrayMadness(int[] a, int[] b)
  {
    int squareResult = 0;
    for (int i = 0; i < a.Length; i++)
      {
      squareResult += a[i] * a[i];
    };
    int cubeResult = 0;
    for (int j = 0; j < b.Length; j++)
      {
      cubeResult += b[j] * b[j] * b[j];
    }
    return squareResult > cubeResult;
  }
}

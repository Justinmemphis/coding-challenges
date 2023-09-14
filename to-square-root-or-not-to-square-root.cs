/* To square(root) or not to square(root)
 * 8kyu
 *
 * Description:
 

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
Example

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes

The input array will always contain only positive numbers, and will never be empty or null.
Mathematics
Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array of numbers
// Results - return an array of of the integer square roots or numbers squared
// Example - 4,3,9 -> 2,9,3
// Pseudocode:
// 	iterate over the array
// 		if element modulo itself is zero
// 			push to array the square root of the number
// 		else
// 			push to array the number squared
// 	return array

using System;

public class Kata
{
  public static int[] SquareOrSquareRoot(int[] array)
  {
	  int length = array.Length;
	  int[] result = new int[length];
	  for (int i = 0; i < array.Length; i++) 
	  {
		  if (((Math.Sqrt(array[i])) % 1) == 0) 
		  {
			result[i] = (int)Math.Sqrt(array[i]);
		  } else
		  {
			result[i] = array[i] * array[i];	
		  }
		  Console.WriteLine(array[i]);
	  }
	  return result;
  }
}

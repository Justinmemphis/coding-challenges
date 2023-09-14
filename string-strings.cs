/* Stringy Strings
 * 8kyu
 *
 * Description:
 

write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
Strings
Binary
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer greater than 0
// Results - return a string equal to the length given and the string is only 1010 etc.
// Example - 3 -> 101
// Pseudocode:
// create result variable
// 	iterate from 0 to length
// 		if i module 2 = 0 (even)
// 			push 1 to string
// 		if i modulo 2 != 0 (odd)
// 			push 0 to string
// 	return result

using System;
using System.Text;

public class Kata
{
  public static string Stringy(int size)
  {
              StringBuilder result = new StringBuilder(size);
          for (int i = 0; i < size; i++)
          {
                  if ((i % 2) == 0) // if even
                  {
                          result.Append('1');
                  }
                  else // if odd
                  {
                          result.Append('0');
                  }
          }
          return result.ToString();

  }
}







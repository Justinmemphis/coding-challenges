/* get character from ASCII Value
 * 8kyu
 *
 * Description:
 

Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0

For ASCII table, you can refer to http://www.asciitable.com/
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - return the ASCII character for the number
// Example - 55 -> 7
// Pseudocode:
// 	return ASCII code for character

public class Kata
{
  public static char GetChar(int charcode)
  {
	  return (char) charcode;
  }
}





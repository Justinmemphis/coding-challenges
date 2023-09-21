/* Short Long Short
 * 8kyu
 *
 * Description:
 

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

    The length of string is not always the same as the number of characters

For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

Algorithms
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two strings which are empty or larger
// Results - return the shorter string on beginning and end of the larger string
// Example - 1,22 -> 1221
// Pseudocode:
// 	if b greater than a
// 		create result string equal to size of a + b + a (lengths)
// 		result string = a + b + a
// 		return result
// 	if a greater than b
// 		do opposite

public class ShortLongShort
{
  public static string Solution(string a, string b)
  {
    if (a.Length > b.Length)
    {
      string result = new string(b + a + b);
      return result;
    }
    else
    {
      string result2 = new string(a + b + a);
      return result2;
    };
  }
}

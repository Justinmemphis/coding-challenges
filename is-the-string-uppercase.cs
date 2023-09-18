/* Is the string uppercase?
 * 8kyu
 * 
 * Description:
 
Is the string uppercase?
Task

Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return true if no lowercase letters; else return false
// Example - 'HELLO' -> true; ' ' -> true
// Pseudocode:
// 	create array from all of the string characters
// 	iterate over the array
// 		if current character is lowercase
// 			return false
// 	return true

public static class StringExtensions
{
  public static bool IsUpperCase(this string text)
  {
    foreach (char c in text)
      {
        if (char.IsLower(c))
          {
            return false;
          }
        }
    return true;
  }
}

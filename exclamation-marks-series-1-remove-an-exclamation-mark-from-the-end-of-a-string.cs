/* Exclamation marks series #1: Remove an exclamation mark from the end of the string
 * 8kyu
 *
 * Description:
 
Description:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the string without the exclamation mark (which could be anywhere in the string
// Example - '!hi' -> 'hi'
// Pseudocode:
// 	iterate over the string
// 	if not an exclamation mark
// 		add to result string
// 	return result string


public class Kata
{
  public static string Remove(string s)
  {
	  if (s[s.Length - 1] == '!')
	  {
		  return s.Substring(0, s.Length-1);
	  }
	  else
	  {
		  return s;
	  }
  }
}





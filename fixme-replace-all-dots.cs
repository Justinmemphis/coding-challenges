/* FIXME: Replace all dots
 * 8kyu
 *
 * Description:
 

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
Task

Fix the bug so we can all go home early.
Notes

String str will never be null.
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string that is not empty
// Results - replace all dots . with dashes .
// Example - one.two.three -> one-two-three
// Pseudocode:
// 	replace character . with character -

public class Kata
{
  public static string ReplaceDots(string str)
  {
    return str.Replace('.','-');
  }
}

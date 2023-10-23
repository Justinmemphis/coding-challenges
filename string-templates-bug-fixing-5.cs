/* String Templates - Bug Fixing #5
 * 8kyu
 *
 * Description:
 

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
◄PREVIOUS KATA
NEXT KATA►
Strings
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive some arguments
// Results - return the arguments together in a string
// Example/Pseudocode - n/a, just a debug exercise

using System;

public static class Kata
{
    public static string buildString(string[] args)
    {
      string result = string.Join(", ", args);
      return $"I like {result}!";
    }
}

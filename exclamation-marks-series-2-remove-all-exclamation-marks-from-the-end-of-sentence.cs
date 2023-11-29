/* Exclamation marks series #2: Remove all exclamation marks from the end of sentence
 * Codewars
 * 8kyu
 *
 * Description:
 
Description:

Remove all exclamation marks from the end of sentence.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return all exclamation marks at the end of the string
// Example - see above
// Pseudocode:
// 	use trimend

public class Kata
{
  public static string Remove(string s)
  {
    return s.TrimEnd('!');
  }
}

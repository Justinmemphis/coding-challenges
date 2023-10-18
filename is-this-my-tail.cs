/* Is this my tail?
 * 8kyu
 *
 * Description:
 

Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a character (tail) and a string (body)
// Results - return true if character (tail) matches last letter of string (body)
// Example/Pseudocode: n/a - really just a debug

public class Kata
{
  public static bool CorrectTail(string body, string tail)
  {
    
    if (tail[0] == body[body.Length - 1])
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

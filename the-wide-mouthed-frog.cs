/* The Wide-Mouthed frog!
 * 8kyu
 *
 * Description:
 

The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
Strings
Logic
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - if string is 'alligator' return 'small' else return wide
// Example - 'alligator' -> 'small'
// Pseudocode:
// 	same as results above

public class Kata
{
  public static string MouthSize(string animal)
  {
    if (animal.ToLower() == "alligator")
      {
      return "small";
    }
    else
      {
      return "wide";
    }
  }
}

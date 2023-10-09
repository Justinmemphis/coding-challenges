/* Triple Trouble
 * 8kyu
 *
 * Description:
 Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
Puzzles
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive three strings of equal length
// Results - get first letter of each string, second letter of every string, etc.
// Example - aa,bb,cc -> abcabc
// Pseudocode:
// 	create result string builder
// 	iterate over strings from a to c
// 		iterate from beginning to end adding to string
// 	return result string builder

using System;
using System.Text;

public class Kata
{
  public static string TripleTrouble(string one, string two, string three)
  {
    StringBuilder sb = new StringBuilder();
    for (int count = 0; count < one.Length; count++)
      {
      sb.Append(one[count]);
      sb.Append(two[count]);
      sb.Append(three[count]);
    }
    return sb.ToString();
  }
}

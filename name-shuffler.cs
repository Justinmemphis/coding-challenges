/* Name Shuffler
 * 8kyu
 *
 * Description:
 

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string with two words separated by a space
// Results - return the string with the last word switched with the first word
// Example - "john doe" -> "doe john"
// Pseudocode:
// 	create words string which is phrase split
// 	return new string with last word then first word

using System;
using System.Linq;

public class Kata
{
  public static string NameShuffler(string str)
  {
    string[] words = str.Split(' ');
    Array.Reverse(words);
    return string.Join(" ", words);
  }
}

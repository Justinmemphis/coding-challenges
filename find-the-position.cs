/* Find the position!
 * 8kyu
 *
 * Description:
 

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a letter
// Results - return the position of the letter in the alphabet
// Example - 'a' -. 'Position of alphabet: 1'
// Pseudocode:
//  get ascii code - 96

public class Kata
{
  public static string Position(char alphabet)
  {
    int asciiCode = (int)alphabet;
    return $"Position of alphabet: {asciiCode - 96}";
  }
}

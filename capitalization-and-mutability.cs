/* Capitalization and Mutability
 * 8kyu
 *
 * Description:
 

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
Strings
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string between 1 to 10 characters
// Results - return the string with the first letter capitalized
// Example - 'hello' -> 'Hello'
// Pseudocode:

using System;

public class Kata
{
  public static string CapitalizeWord(string word)
  {
	  return Char.ToUpper(word[0]) + word[1..];
  }
}

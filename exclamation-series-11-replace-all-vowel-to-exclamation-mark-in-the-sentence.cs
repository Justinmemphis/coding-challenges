/* Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
 * 8kyu
 *
 * Description:
 
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return the string but with all vowels aeiouAEIOU replaced with exclamation marks
// Example - 'hi' -> 'h!'
// Pseudocode:
// 	create string builder length of string
// 	iterate over the string
// 		if vowel append exclamation mark
// 		else append character
// 	return result

using System;
using System.Text.RegularExpressions;

public static class Kata
{
  public static string Replace(string s)
  {
    Regex result = new Regex("[aeiouAEIOU]");
    return result.Replace(s, "!");
  }
}

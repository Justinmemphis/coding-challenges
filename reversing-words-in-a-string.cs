/* Reversing Words in a String
 * 8kyu
 *
 * Description:
 

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

Happy coding!
Fundamentals
Strings
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string with several words
// Results - return the string with words reversed
// Example - 'hello world' -> 'world hello'
// Pseudocode:
// 	iterate over the string separated by spaces
// 	return the string in reverse order to a result string
// 	return result string

using System;

public class Kata
{
  public static string Reverse(string text)
  {
    string [] listWords = text.Split(' ');
    Array.Reverse(listWords);
    return string.Join(" ", listWords);
  }
}

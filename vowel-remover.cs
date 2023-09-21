/* Vowel remover
 * 8kyu
 *
 * Description:
 

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of characters
// Results - remove any lowercase vowels and return the string
// Example - 'codewars' -> 'cdwrs'
// Pseudocode:
// 	create result string
// 	iterate over the given string
// 		if not a vowel
// 			add to result string
// 	return result string

using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static string Shortcut(string input)
    {
        var vowels = new List<char> { 'a', 'e', 'i', 'o', 'u' };

        StringBuilder resultBuilder = new StringBuilder();

        foreach (var c in input)
        {
            if (c == ' ' || !vowels.Contains(c))
            {
                resultBuilder.Append(c);
            }
        }

        return resultBuilder.ToString();
    }
}

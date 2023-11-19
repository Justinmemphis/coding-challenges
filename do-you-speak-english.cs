/* Do you speak "English"?
 * Codewars
 * 8kyu
 *
 * Description:
 

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string of arbitray length with ascii characters
// Results - return true if the string contains the string "english" case-insensitive
// Example - see above
// Pseudocode:
// 	return string.lowercase includes "english"

namespace Solution
{
    static class Kata
    {
        public static bool SpeakEnglish(string sentence)
        {
          return sentence.ToLower().Contains("english");
        }
    }
}

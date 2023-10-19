/* Hello, Name or World!
 * 8kyu
 *
 * Description:
 

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return 'Hello, World!' if empty string or 'name' does not exist
// 	else return 'Hello, Name!' being sure to capitalize first letter and lower case rest of the letters
// 	Example - see above
// 	Pseudocode: 
// 		if empty or name doesn't exist
// 			return hello world
// 		else
// 			return capitalized then lower case

using System;

public static class Kata
{
    public static string Hello(string name = null)
    {
      if (string.IsNullOrEmpty(name))
        {
        return "Hello, World!";
          }
      else
        {
        string result = char.ToUpper(name[0]) + name.Substring(1).ToLower();
        return $"Hello, {result}!";
      }
    }
}

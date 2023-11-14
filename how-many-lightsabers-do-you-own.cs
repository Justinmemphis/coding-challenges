/* How many lightsabers do you own?
 * Codewars
 * 8kyu
 *
 * Description:
 

Inspired by the development team at Vooza, write the function that

    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string and a number
// Results - if string equals certain thing return 18 else return 0
// Example - see above
// Pseudocode:
// 	if string equals Zach
// 		return 18
// 	else
// 		return 0

using System;

public class Kata
{
  public static int HowManyLightsabersDoYouOwn(string name)
  {
	  return name == "Zach" ? 18 : 0;
  }
}

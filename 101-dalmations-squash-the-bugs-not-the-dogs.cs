/* 101 Dalmations - squash the bugs, not the dogs!
 * 8kyu
 *
 * Description:
 

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!

Debugging
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a function
// Results - debug the function to get it to work
// Example - N/A
// Pseudocode: rewrite function removing bugs

using System.Collections.Generic;

public static class Kata
    {
        public static string HowManyDalmatians(int n)
        {
            List<string> dogs = new List<string>()
            {
                "Hardly any",
                "More than a handful!",
                "Woah that's a lot of dogs!",
                "101 DALMATIONS!!!"
            };
              if( n <= 10)
                {
                return dogs[0];
                  }
          else if (n <= 50)
            {
              return dogs[1];
                }
          else if (n == 101)
            {
            return dogs[3];
              }
          else
          {
            return dogs[2];
          }
        }
    }

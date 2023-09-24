/* What's the real floor?
 * 8kyu
 *
 * Description:


Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here
Examples

1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number which is the floor
// Results - translate the number down one and with floor 13 skipped - show the true floor
// Pseudocode:
// 	if number > 12
// 		return number less 2
// 	else
// 		return number less 1

using System;

public static class Kata
{
  public static int GetRealFloor(int n)
  {
    Console.Write(n);
    if (n <= 0)
    {
      return n;  
    }
    else
    {
    return n > 13 ? n - 2 : n - 1;
    }
  }
}




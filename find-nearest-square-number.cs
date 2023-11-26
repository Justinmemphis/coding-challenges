/* Find Nearest square number
 * Codewars
 * 8kyu
 *
 * Description:
 

Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers

Find your caterer
Fundamentals
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - given a positive integer
// Results - return nearest square above or below integer
// Example - see above
// Pseudocode:
// 	if current number square root
// 		return current number
// 	else
// 		int upper square root = 0
// 		int lower square root = 0
// 		iterate from current number up
// 			if square root
// 				stop and return as upper square root
// 		iterate from current number down
// 			if square root
// 				stop and return as lower square root
// 		return (upper - number) > (number > lower) ? lower : upper;

using System;

public static class Kata
{
  public static int NearestSq(int n)
  {
    if (Math.Sqrt(n) % 1 == 0)
    {
      return n;
    }
    else
    {
      int upper = n + 1;
      int lower = n - 1;
      while (Math.Sqrt(upper) % 1 != 0)
      {
        upper++;
      };
      while (Math.Sqrt(lower) % 1 != 0)
      {
        lower--;
      }
      return (upper - n) > (n - lower) ? lower : upper;
    }
  }
}

/* Find the Remainder
 * Codewars
 * 8kyu
 *
 * Description:
 
Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Divison by zero should throw a DivideByZeroException.
Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)

Mathematics
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers
// Results - return the remainder of dividing the bigger one by the smaller one, except for zero which should return a special exception
// Example - see above
// Pseudocode:
// 	if n > m
// 		m == 0 ? return exception : n % m
// 	else
// 		n == 0 ? return exception : m % n

using System;

public class Kata
{
  public static int Remainder(int a, int b)
  {
              if (a > b)
          {
                  return b == 0 ? throw new DivideByZeroException() : a % b;
          }
          else
          {
                return a == 0 ? throw new DivideByZeroException() : b % a;
          }
  }
}

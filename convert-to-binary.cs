/* Convert to Binary
 * 8kyu
 *
 * Description:
 
Task Overview

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
Documentation:
Kata.ToBinary Method (Int32)

Returns the binary representation of a non-negative integer as an integer.

Syntax
public static int ToBinary(
int n
  )

Parameters
n
Type: System.Int32
The integer to convert.

Return Value
Type: System.Int32
The binary representation of the argument as an integer.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */

Mathematics
Algorithms
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a non-negative integer
// Results - return the integer as a binary integer
// Example - 5 -> 101
// Pseudocode:
// 	return number converted to binary

using System;

public static class Kata
{
  public static int ToBinary(int n)
  {
    return Convert.ToInt32(Convert.ToString(n,2));
  }
}

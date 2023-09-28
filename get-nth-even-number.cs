/* Get Nth Even Number
 * 8kyu
 *
 * Description:
 

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

The input will not be 0.
Mathematics
Puzzles
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer number greater than zero
// Results - return the even number represented by that number if counting in sequence
// Example - 100 -> 198
// Pseudocode:
// 	return the number doubled - 2

public class Kata
{
  public static int NthEven(int n)
  {
	  return (n * 2) - 2;
  }
}

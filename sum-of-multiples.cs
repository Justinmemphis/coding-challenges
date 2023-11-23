/* Sum of Multiples
 * Codewars
 * 8kyu
 *
 * Description:
 
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

Kata.SumMul(2, 9)   => 2 + 4 + 6 + 8 = 20
Kata.SumMul(3, 13)  => 3 + 6 + 9 + 12 = 30
Kata.SumMul(4, 123) => 4 + 8 + 12 + ... = 1860
Kata.SumMul(4, 1)   // throws ArgumentException
Kata.SumMul(0, 20)  // throws ArgumentException

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers
// Results - return the multiples of the first number until you get to the second number
// Example - see above
// Pseudocode:
// 	create result integer
// 	iterate from 0 to m, n steps at a time
// 		add n to the result integer
// 	return the result integer

public class Kata
{
  public static int SumMul(int n, int m)
  {
    if (n <= 0) {
      throw new System.ArgumentException();
    }
            else if (n < m)
        {
                int result = 0;
                for (int i = n; i < m; i += n)
                {
                        result += i;
                };
                return result;
        }
        else
        {
         throw new System.ArgumentException();
        };

  }
}

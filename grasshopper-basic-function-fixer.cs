/* Grasshopper - Basic Function Fixer
 * 8kyu
 *
 * Description:
 
Fix the function

I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - return the number plus five
// Example - 4 + 5 = 9
// Pseudocode
// 	return num + 5

public class Kata
{
  public static int AddFive(int num)
  {
    int total = num;
    total = total + 5;
    return total;
  }
}

/* Generate range of integers
 * 8kyu
 *
 * Description:
 

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
Task

Implement a function named

GenerateRange(2, 10, 2) == new int[]{ 2, 4, 6, 8, 10 }
GenerateRange(1, 10, 3) == new int[]{ 1, 4, 7, 10 }

Note

    min < max
    step > 0
    the range does not HAVE to include max (depending on the step)

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a min and max value plus a step value
// Results - generate range of integers between min and max at step
// Example - 1,10,3 -> 1,4,7,10
// Pseudocode:
// 	create string iterator
// 	iterate from min to max at step
// 		add numbers to string iterator
// 	return string iterator

public class Kata
{
  public static int[] GenerateRange(int min, int max, int step)
  {
    int size = (max - min) / step + 1;
    int[] intArray = new int[size];
    
    for (var i = 0; i < size; i++)
      {
      intArray[i] = min + i * step;
    }
    
    return intArray;
  }
}


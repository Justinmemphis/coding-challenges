/* Reverse List Order
 * 8kyu
 *
 * Description:
 

In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)

* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

Lists
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a list of elements
// Results - return the list in reverse order
// Example - 1,2,3 -> 3,2,1
// Pseudocode:
// 	return reverse list

using System.Collections.Generic;

public class Kata
{
  public static List<int> ReverseList(List<int> list)
  {
    List<int> result = new List<int>(list);
    result.Reverse();
    return result;
  }
}

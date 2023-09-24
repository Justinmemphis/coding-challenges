/* Lario and Muigi Pipe Problem
 * 8kyu
 *
 * Description:
 
Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.
Task

Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
Lists
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a list of numbers in ascending order
// Results - return a list of numbers in ascending order with all of the integer gaps filled in
// Example - 1,3,7 -> 1,2,3,4,5,6,7
// Pseudocode:
// 	create result list
// 	iterate from start to end
// 		add number to list at position
// 	return list

using System;
using System.Collections.Generic;
using System.Linq;

public class Fixer
{
  public static List<int> PipeFix(List<int> numbers)
  {
    List<int> result = Enumerable.Range(numbers.First(), numbers.Last() - numbers.First() + 1).ToList();
    return result;
  }
}

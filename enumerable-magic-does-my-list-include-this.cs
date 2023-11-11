/* Enumerable Magic - Does My List Include This?
Codewars
8kyu

Description:


Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
Fundamentals
*/

// Solution:
// Just test if array includes the value or not

using System;

public class Kata
{
  public static bool Include(int[] arr, int item)
  {
    return Array.Exists(arr, x => x == item);
  }
}

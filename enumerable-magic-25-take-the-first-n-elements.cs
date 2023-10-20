/* Enumerable Magic #25 - Take the First N Elements
 * 8kyu
 *
 * Description:
 

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://docs.microsoft.com/en-us/dotnet/api/system.array?view=netcore-3.1
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a list and a number n
// Results - return the first n elements from the list
// Example - 1,2,3,4,5,6, 3 -> 1,2,3
// Pseudocode

using System;

public static class Kata
{
    public static int[] Take(int[] arr, int n)
    {
        if (n == 0)
    	{
          	return new int[0];
        }
     	else
        {
        	return arr[0..Math.Min(n, arr.Length)];
        }
    }
}

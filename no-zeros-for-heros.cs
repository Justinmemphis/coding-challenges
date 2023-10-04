/* No zeros for heros
 * 8kyu
 *
 * Description:
 

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number
// Results - remove ending zeros (except if one digit then return it)
// Example - 1450 -> 145
// Pseudocode
// 	if one digit length
// 		return number
// 	else
// 		remove trailing zeros

using System;

public class NoBoring
{
    public static int NoBoringZeros(int n)
    {
            if (n.ToString().Length == 1)
            {
                    return n;
            }
            else
            {
                    string test = n.ToString();
                    string trimmedTest = test.TrimEnd('0');
                    int result = int.Parse(trimmedTest);
                    return result;
            }
    }
}






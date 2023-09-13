/* Hex to Decimal
 * 8kyu
 *
 * Description:
 

Complete the function which converts hex number (given as a string) to a decimal number.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a hexadecimal value
// Results - return the value as a decimal value
// Example - FF -> 255
// Pseudocode:
// 	

using System;

public class Kata
{
  public static int HexToDec(string hexString)
  {
    if (hexString.StartsWith("-"))
    {
       hexString = hexString.Substring(1);
      int decimalValue = Convert.ToInt32(hexString, 16);
      decimalValue = decimalValue * -1;
      return decimalValue;
    }
    Console.WriteLine("hexstring: " + hexString);
    int decimalValue2 = Convert.ToInt32(hexString, 16);
    return decimalValue2;
  }
}

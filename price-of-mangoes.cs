/* Price of Mangoes
 * Codewars
 * 8kyu
 *
 * Description:
 

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a quantity and price
// Results - return total price, removing every third price
// Example - see above
// Pseudocode:
// 	create temp variable = quantity divided by three, truncated
// 	return (quantity - temp) * price

public class Kata
{
  public static int Mango(int quantity, int price)
  {
    int temp = quantity / 3;
    return (quantity - temp) * price;
  }
}

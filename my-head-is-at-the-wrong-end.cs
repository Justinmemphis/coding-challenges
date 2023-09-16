/* My head is at the wrong end!
 * 8kyu
 *
 * Description:
 

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
Arrays
Lists
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an array with three elements
// Results - return the array with first and third elements switch
// Example - 1,2,3 -> 3,2,1
// Pseudocode:
// 	create new array size three
// 	new array 0 = given array 2
// 	new array 1 = given array 1
// 	new array 2 = given array 0
//	return new array

public class Kata
{
  public static string[] FixTheMeerkat(string[] arr)
  {
    string[] result = new string[3];
    result[0] = arr[2];
    result[1] = arr[1];
    result[2] = arr[0];
    return result;
  }
}

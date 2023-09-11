/* Grasshopper - Terminal game move function
 * 8kyu
 *
 * Description:
 
Terminal game move function

In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:

move(3, 6) should equal 15

Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers - first integer is position and second integer is how many moves to go (twice)
// Results - take the position and then take the moves twice and return the final position
// Example - 0, 4 -> 8
// Pseudocode:
// 	return start + (roll times 2 )

using System;

public class Game
{
  public static int Move(int position, int roll)
  {
	  return position + (roll * 2);
  }
}

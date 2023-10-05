/* Grasshopper - Terminal game combat function
 * 8kyu
 *
 * Description:
 

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a health and damage
// Results - return health minus damage or zero if greater
// Example: 100, 5 -> 95
// Pseudocode:
// 	if damage greater than health
// 		return zero
// 	else
// 		return health - damage

using System;

public static class Game
{
  public static float Combat(float health, float damage)
  {
    if (damage > health)
      {
      return 0;
    }
    else
      {
      return health - damage;
    }
  }
}

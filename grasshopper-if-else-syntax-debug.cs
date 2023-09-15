/* Grasshopper - if/else syntax debug
 * 8kyu
 *
 * Description:
 
If/else syntax debug

While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a broken function
// Results - fix the function so that if health greater than 0 it returns true; otherwise it returns false
// Pseudocode:
// 	none - fix program itself
// 
// solved - made first condition (if > 0) and then made second condition else
// (prior version had if and else if, but had no default else condition

public class Player
{
  private int health = 100;
  public int Health
  {
    get
    {
      return this.health;
    }
    set
    {
      health = value;
    }
  }
  
  public Player()
  {
    
  }
  
  //FIXME: This method won't compile for some reason! :(
  public bool CheckAlive()
  {
    if (this.Health > 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

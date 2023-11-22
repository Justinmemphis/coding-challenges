/* Find out whether the shape is a cube
 * Codewars
 * 8kyu
 *
 * Description:
 

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive the volume of a cube and the length of a single side
// Results - return if the cube is a true cube or not
// Example - n/a
// Pseudocode:
// 	return volume = side * side * side

namespace CubeCheck {
  using System;
  public class CubeChecker
  {
    public bool IsCube(double volume, double side)
    {
	    namespace CubeCheck {
  using System;
  public class CubeChecker
  {
    public bool IsCube(double volume, double side)
    {
      if (side < 1)
      {
        return false;
      }
      else
        {
                  return (volume == side * side * side);
        }
    }
  }
    }
  }
}

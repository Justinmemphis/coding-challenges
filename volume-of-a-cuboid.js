/* Volume of a cuboid
 * 8kyu
 *
 * Description:
 

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
Geometry
Fundamentals
Mathematics
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive length height and width (integers)
// Results - return the volume of the cuboid
// Example - 6,2,5 -> 60

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return length * width * height;
	};
};

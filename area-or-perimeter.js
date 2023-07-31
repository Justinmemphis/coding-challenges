/* Area or Perimeter
 * 8kyu
 *
 * Description:
 

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
Fundamentals
Mathematics
Geometry
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Paramters - receive the length and width of a 4-sided polygon
// Results - if both numbers are the same return the area; if the numbers are different return the perimeter
// Example - 3,3 -> 9; 6, 10 -> 32
// Pseudocode
// 	test if square or rectangle
// 		if square return area
// 		if rectangle return perimeter

const areaOrPerimeter = function(l, w) {
	return l === w ? l * w : 2 * l + 2 * w;
}

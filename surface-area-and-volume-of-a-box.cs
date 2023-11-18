/* Surface Area and Volume of a Box
 * Codewars
 * 8kyu
 *
 * Description:
 

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
Geometry
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive width, height, and depth of a box
// Results - return surface area and volume of the box
// Example - 4,2,6 -> 4 * 2 * 6 = 48 volume; 2 * (4*2 + 4*6 + 2*6) = 88
// Pseudocode:
// 	return calc 1, calc 2

using System;

    public class Kata
    {
        public static int[] Get_size(int w,int h,int d)
        {
		int surface_area = 2 * (w*h + w*d + h*d);
                int volume = w*h*d;
                return new int[] {surface_area,volume};
        }
    }

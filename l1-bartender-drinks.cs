/* L1: Bartender, drinks!
 * Codewars
 * 8kyu
 *
 * Description:
 

Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string
// Results - return another string based on the input string
// Example - see above
// Pseudocode:
// 	convert string to lowercase
// 	switch
// 		jabroni - Patron Tequila
// 		school counselor - Anything with Alcohol
// 		programmer - Hipster Craft Beer
// 		bike gang member - Moonshine
// 		politician - Your tax dollars
// 		rapper - Cristal
// 		default - Beer

public class Kata
{
  public static string GetDrinkByProfession(string p)
  {
	  string test = p.ToLower();
	  switch (test)
	  {
		  case "jabroni":
			  return "Patron Tequila";
		case "school counselor":
			  return "Anything with Alcohol";
		case "programmer":
			  return "Hipster Craft Beer";
		case "bike gang member":
			  return "Moonshine";
		case "politician":
			  return "Your tax dollars";
		case "rapper":
			return "Cristal";
		default:
			return "Beer";
	  }

  }
}

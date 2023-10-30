/* Welcome to the City
 * 8kyu
 *
 * Description:
 

Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
Strings
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a city and person string
// Results - return a set string with the city and person
// Example - see above
// Pseudocode:
// 	return $ variables etc.

public class Kata
{
  public static string SayHello(string[] name, string city, string state)
  {
    string fullName = string.Join(' ', name);
    return $"Hello, {fullName}! Welcome to {city}, {state}!";
  }
}

/* Duck duck goose
 * 8kyu
 *
 * Description:
 

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

Arrays
Lists
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive an array of objects; the first object is a list of players;
// 	the second object is the player that should be chosen (start with number 1)
// Results - return the player that should be chosen
// Example - ([f,g,h], 2) -> returns g
// Pseudocode:
// 	return array[goose-1];

function duckDuckGoose(players, goose) {
	return players[(goose - 1) % players.length].name;
}

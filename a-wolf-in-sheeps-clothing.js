/* A wolf in sheep's clothing
 8kyu

 Description:


Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
Fundamentals
Arrays
*/

// Solution
// PREP - Parameters, Returns, Examples, Pseudocode
// Parameters - receive an array with strings of either "sheep" or "wolf"; there is one "wolf" string in the array; there are no empty arrays (implied); also implied that there is at least one sheep before any wolf elements
// Returns - if the wolf is the last element of the array return "Pls..." otherwise return "Oi!..." with the sheep number being the sheep closest to the end of the array and their number
// Examples - "s","s","s,","s","w","s","s" -> return "Oi!..." plus sheep number 2 (counting from end)
// Pseudocode:
// 	if the last element of the array is "wolf" then return "Pls..."
// 	otherwise iterate over the array from the end until you get to the wolf
// 		add one to the wolf position and say "Oi!..." plus that number

function warnTheSheep (queue) {
	        if (queue[queue.length - 1] === 'wolf') {
                return 'Pls go away and stop eating my sheep';
        } else {
                for (var i = 0; i < queue.length; i++) {
                        if (queue[i] === 'wolf') {
                                return `Oi! Sheep number ${queue.length - 1 - i}! You are about to be eaten by a wolf!`;
                        };
                };
        };

}


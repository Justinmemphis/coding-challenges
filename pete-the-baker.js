/* Pete, the baker
 * 5kyu
 *
 * Description:
 

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

Algorithms
*/

// Solution:
// PREP - Parameters, Results, Examples, Pseudocode
// Parameters - receive two objects - the first is a recipe, the second is what is available
// Results - return how many instances of the recipe can be made with what is available
// Example - see above
// Pseudocode:
// 	create max number at 0
// 	iterate over the recipe object
// 		if the key is present in available
// 			new temp variable equals divide available property by recipe property
// 			if temp is larger than max
// 				max equals temp
// 		else
// 			return zero
// 	return max

function cakes(recipe, available) {
          let min = 0;
        for (let [key, value] of Object.entries(recipe)) {
                if (!available.hasOwnProperty(key)) {
                    return 0;
                } else {
                    Object.filter = (obj, predicate) =>
                        Object.fromEntries(Object.entries(obj).filter(predicate));
                    let filtered = Object.filter(available, ([name, amount]) => name == key);
                    let temp2 = 0;
                    for (let [key2, value2] of Object.entries(filtered)) {
                        temp2 = value2;
                        let multiple = parseInt(+value2 / +value);
                        if (multiple == 0) {
                            return 0;
                        };
                        if (min == 0) {
                            min = multiple;
                        } else if (multiple < min) {
                            min = multiple;
                        };
                    };
                };
        };
  return min;








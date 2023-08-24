/* Cat years, Dog years
 * 8kyu
 *
 * Description:
 Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

References

    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

If you liked this Kata there is another related one here
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a positive integer greater or equal than 1
// Results - return same integer, plus two other numbers based on calculation
// Example - 1 -> 1, 15, 15
// Pseudocode:
// 	create result array with number
// 	create cat number and push to array
// 	create dog number and push to array
// 	return array joined

var humanYearsCatYearsDogYears = function(humanYears) {
	let cat = 0;
	let dog = 0;
	if (humanYears == 1) {
		cat = 15;
		dog = 15;
	} else if (humanYears === 2) {
		cat = 15 + 9;
		dog = 15 + 9;
	} else {
		cat = 15 + 9 + (4 * (humanYears - 2));
		dog = 15 + 9 + (5 * (humanYears - 2));
	};
	return [humanYears, cat, dog]; 
};

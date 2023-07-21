/* Is he gonna survive?
 * 8kyu
 *
 * Description:
 

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive two integers
// Results - return if the first digit divided by two is equal or greater than the second number
// Example - 4, 5 -> false
// Pseudocode:
// 	return if the first digit divided by two is equal or greater than the second number

function hero(bullets, dragons){
	return (bullets/2) >= dragons;
}

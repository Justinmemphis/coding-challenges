/* Do I get a bonus?
 * 8kyu
 *
 * Description:
 

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
Strings
Logic
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer and a boolean
// Results - if boolean is true, return salary times 10; else return just salary
// Example - 78, false -> 78
// Pseudocode:
// 	return bonus ? salary times 10 : salary

function bonusTime(salary, bonus) {
	return bonus ? `\u00A3${salary*10}` : `\u00A3${salary}`;
}

/* Calculate BMI
 * 8kyu
 *
 * Description:


Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
Fundamentals
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a number for height and a number for weight
// Results - return the bmi category for the person
// Example - 80, 1.8 -> "Normal"
// Pseudocode:
// 	return
// 		height/weight switch
// 		case <= 18.5
// 			"Underweight"
// 		case <= 25
// 			"Normal"
// 		case <= 30
// 			"Overweight"
// 		default
// 			"Obese"

function bmi(weight, height) {
        let bmi1 = weight / (height * height);
        if (bmi1 <= 18.5) {
                return "Underweight";
        } else if (bmi1 <= 25) {
                return "Normal";
        } else if (bmi1 <= 30) {
                return "Overweight";
        } else {
                return "Obese";
        }
}
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
calculate-bmi.js[+] [unix] (17:

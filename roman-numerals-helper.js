/* Roman Numerals Helper
 * 4kyu
 *
 * Description:
 

Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
Examples

to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1

Help
Symbol 	Value
I 	1
IV 	4
V 	5
X 	10
L 	50
C 	100
D 	500
M 	1000
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an integer number (or a Roman numeral string)
// Results - convert to the other kind
// Example -> 1000 -> 'M'; 'I' -> 1
// Pseudocode:
// 	
// 	toRoman
// 		create result string
//
// 		function convertToRoman
//	 		if number > 1000
//	 			subtract 1000 from number
// 				M
// 			if number > 500
// 				D
// 			if number > 100
// 				C
// 			if number > 50
// 				L
// 			if number > 10
// 				X
// 			if number > 5
// 				V
// 			else
// 				I
//
// 		if number > 0
// 			convertToRoman(number)
// 		else
// 			return result
//
// 	fromRoman
// 		create result string
// 		function convertToDecimal
// 			temp = array shift(string)
//			if M
//				return 1000
//			if D
//				check if DM
//				else
//					return 500
//			if C
//				check if CM
//				else
//					return 100
//			if L	
//				check if LC
//				else
//					return 50
//			if X	
//				check if XL
//				else
//					return 10
//			if V
//				check if VX
//				else
//					return 5
//			else
//				check if IV
//				else
//					return 1
//
//		if string
//			convertToDecimal(temp)
//		else
//			return result

class RomanNumerals {
  static toRoman(num) {
                    let result = '';

                function convertToRoman (x) {
                        if (x >= 1000) {
                                x = x - 1000;
                                result = result + 'M';
                        } else if (x >= 900) {
                                x = x - 900;
                                result = result + 'CM';
                        } else if (x >= 500) {
                                x = x - 500;
                                result = result + 'D';
                        } else if (x >= 400) {
                                x = x - 400;
                                result = result + 'CD';
                        } else if (x >= 100) {
                                x = x - 100;
                                result = result + 'C';
                        } else if (x >= 90) {
                                x = x - 90;
                                result = result + 'XC';
                        } else if (x >= 50) {
                                x = x - 50;
                                result = result + 'L';
                        } else if (x >= 40) {
                                x = x - 40;
                                result = result + 'XL';
                        }else if (x >= 10) {
                                x = x - 10;
                                result = result + 'X';
                        } else if (x >= 9) {
                                x = x - 9;
                                result = result + 'IX';
                        } else if (x >= 5) {
                                x = x - 5;
                                result = result + 'V';
                        } else if (x >= 4) {
                                x = x - 4;
                                result = result + 'IV';
                        } else {
                                x = x - 1;
                                result = result + 'I';
                        };

                        if (x > 0) {
                                return convertToRoman(x);
                        } else {
                                return result;
                        };
                };

                let answer = convertToRoman(num);
                return answer;

  }

  static fromRoman(str) {
                    let resultNumber = 0;
                let newArray = str.split('');

                function convertToNumber (y) {
                        let temp = y.shift();
                        if (temp === 'M') {
                                resultNumber += 1000;
                        } else if (temp === 'D') {
                                resultNumber += 500;
                        } else if (temp === 'C') {
                                if (y[0] === 'M') {
                                        let temp2 = y.shift();
                                        resultNumber += 900;
                                } else if (y[0] === 'D') {
                                        let temp3 = y.shift();
                                        resultNumber += 400;
                                } else {
                                        resultNumber += 100;
                                };
                        } else if (temp === 'L') {
                                resultNumber += 50;
                        } else if (temp === 'X') {
                                if (y[0] === 'C') {
                                        let temp4 = y.shift();
                                        resultNumber += 90;
                                } else if (y[0] === 'L') {
                                        let temp5 = y.shift();
                                        resultNumber += 40;
                                } else {
                                        resultNumber += 10;
                                };
                        } else if (temp === 'V') {
                                resultNumber += 5;
                        } else {
                                if (y[0] === 'X') {
                                        let temp6 = y.shift();
                                        resultNumber += 9;
                                } else if (y[0] === 'V') {
                                        let temp7 = y.shift();
                                        resultNumber += 4;
                                } else {
                                        resultNumber += 1;
                                };
                        };

                        if (y.length > 0) {
                                return convertToNumber(y);
                        } else {
                                return resultNumber;
                        };
                };

                let newAnswer = convertToNumber(newArray);
                return newAnswer;


  }

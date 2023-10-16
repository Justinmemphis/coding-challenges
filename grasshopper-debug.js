/* Grasshopper - Debug
 * 8kyu
 *
 * Description:
 
Debug celsius converter

Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)

Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.
Debugging
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a program to convert fahrenheit to celsius
// Results - resolve why the program isn't working correctly (debug it)
// Example, Pseudocode - n/a

function convertTemp (f) {
  let c = (f - 32) * (5/9);
  return c;
}

function weatherInfo (temp) {
  console.log('temp',temp);
  let newTemp = convertTemp(temp);
  if (newTemp <= 0) {
    return (newTemp + " is freezing temperature")
  } else {
    return (newTemp + " is above freezing temperature")
  }
}


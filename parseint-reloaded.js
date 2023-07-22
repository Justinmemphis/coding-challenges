/* parseInt() reloaded
 * 4kyu
 *
 * Description:
 

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

    "one" => 1
    "twenty" => 20
    "two hundred forty-six" => 246
    "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:

    The minimum number is "zero" (inclusively)
    The maximum number, which must be supported is 1 million (inclusively)
    The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
    All tested numbers are valid, you don't need to validate them

Parsing
Strings
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string that represents a number
// Results - convert the string to a number (like doing parseInt() )
// Example - twenty -> 20
// Pseudocode:
// 	convert words to number values
//
// 	create a new array where it is separated by spaces
//	if single element convert that element and return
//	else
//		iterate over the array
//			if current number 0-100
//				see what following number is
//					return number
//			else
//				iterate from back to front - removing elements	

// my favorite solution from given solutions:

var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9,
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16,
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50,
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}



// never solved - see partial answer below:
function parseInt(string) {
  console.log('string',string);
          let wordObject = {
                'zero': 0,
                'one': 1,
                'two': 2,
                'three': 3,
                'four': 4,
                'five': 5,
                'six': 6,
                'seven': 7,
                'eight': 8,
                'nine': 9,
                'ten': 10,
                'eleven': 11,
                'twelve': 12,
                'thirteen': 13,
                'fourteen': 14,
                'fifteen': 15,
                'sixteen': 16,
                'seventeen': 17,
                'eighteen': 18,
                'nineteen': 19,
                'twenty': 20,
                'thirty': 30,
                'forty': 40,
                'fifty': 50,
                'sixty': 60,
                'seventy': 70,
                'eighty': 80,
                'ninety': 90,
                'hundred': 100,
                'thousand': 1000,
                'million': 1000000
        };

  let result = 0;
  
    let newArray = string.split(' ');

  while (newArray.length !== 0) {
    let temp = newArray.shift(); // Use shift() to get the first element

    if (temp.includes('-')) {
      let newTemp = temp.split('-');
      let digit1 = translate(newTemp[0]);
      let digit2 = translate(newTemp[1]);
      result += digit1 + digit2;
    } else if (temp === 'hundred' || temp === 'thousand' || temp === 'million') {
      let first = newArray.shift(); // Use shift() to get the first number
      if (temp === 'thousand' && first === 'hundred') {
        let sixth = newArray.shift();
        result += translate(sixth) * 100 * 1000;
      }
      if (temp === 'thousand' && newArray.length > 0) {
        let fourth = translate(newArray.shift());
        let fifth = translate(newArray.shift());
        result += fourth * fifth * 1000;
      }
      if (first.includes('-')) {
        let moreTemp = first.split('-');
        let digit3 = translate(moreTemp[0]);
        let digit4 = translate(moreTemp[1]);
        first = digit3 + digit4;
      } else {
        first = translate(first);
      };
      let second = translate(temp);
      result += (first * second);
    } else if (temp === 'and') {
      // do nothing
    } else {
      let digit = translate(temp);
      result += digit;
    }
  }

  return result;


// Helper function to translate word to number
function translate(variable) {
  let answer = Object.keys(wordObject).find(key => key === variable);
  return answer ? wordObject[answer] : 0;
}
  
  
  /*
  
  function translate (variable) {
    
    let answer = Object.keys(wordObject).filter(key => key === variable);
    return +wordObject[answer];
    }
    
  
  let newArray = string.split(' ');
  console.log('newArray',newArray);
  
  while (newArray.length != 0) {
    console.log('while loop,newArray,result',newArray,result);
    let temp = newArray.pop();
    
    if (temp.includes('-')) {
      let newTemp = temp.split('-');
      //console.log('newTemp',newTemp);
      let digit1 = translate(newTemp[0]);
      let digit2 = translate(newTemp[1]);
      result += digit1 + digit2;
    } else if (temp === 'hundred' || temp === 'thousand' || temp === 'million') {
      let first = newArray.pop(); // get first number
      if (temp === 'thousand' && first === 'hundred') {
        let sixth = newArray.pop();
        console.log('sixth',sixth);
        result += translate(sixth) * 100 * 1000;
      }
      if (temp === 'thousand' && newArray.length > 0) {
        let fourth = translate(newArray.pop());
        let fifth = translate(newArray.pop());
        console.log('****fourth,fifth',fourth,fifth);
        result += fourth * fifth * 1000;
      }
      if (first.includes('-')) { // if it is a split first number
        let moreTemp = first.split('-');
        let digit3 = translate(moreTemp[0]);
        let digit4 = translate(moreTemp[1]);
        first = digit3 + digit4;
      } else {
        first = translate(first);
      };
      let second = translate(temp); // get second number
      result += (first * second);
    } else if (temp === 'and') {
      // do nothing
    } else {
      let digit = translate(temp);
      result += digit;
    };
    
  }
  
  return result;
  
  
  */
  
  /*
  
  if (newArray.length === 1) {
    translate(newArray);  
    return result;
  } else {
    for (let i = newArray.length-1; i >= 0; i--) {
        if (newArray[i] === 'hundred' || 
            newArray[i] === 'thousand' || 
            newArray[i] === 'million') {
            translate(newArray);     
            console.log('result',result);
        }
    }
    return;
  };
  */
}


function parseInt(string) {
  console.log('string',string);
          let wordObject = {
                'one': 1,
                'two': 2,
                'three': 3,
                'four': 4,
                'five': 5,
                'six': 6,
                'seven': 7,
                'eight': 8,
                'nine': 9,
                'ten': 10,
                'eleven': 11,
                'twelve': 12,
                'thirteen': 13,
                'fourteen': 14,
                'fifeteen': 15,
                'sixteen': 16,
                'seventeen': 17,
                'eighteen': 18,
                'nineteen': 19,
                'twenty': 20,
                'thirty': 30,
                'forty': 40,
                'fifty': 50,
                'sixty': 60,
                'seventy': 70,
                'eighty': 80,
                'ninety': 90,
                'hundred': 100,
                'thousand': 1000,
                'million': 1000000
        };

  let result = 0;
  
  function translate (variable) {
    Object.keys(wordObject).forEach(element => {
      if (element.includes(variable)) {
       console.log('element',element)
       console.log('wordObject[element]',wordObject[element])
       result += +wordObject[element];
       console.log('result temp',result);
      }
    }
  )};
  
  let newArray = string.split(' ');
  console.log('newArray',newArray);
  
  while (newArray.length != 0) {
    console.log('while loop,newArray',newArray);
    let temp = newArray.pop();
    
    if (temp.includes('-')) {
      let newTemp = temp.split('-');
      console.log('newTemp',newTemp);
      translate(newTemp[0]);
      translate(newTemp[1]);
    } else {
      translate(temp);
    };
    
  }
  
  return result;
  /*
  
  if (newArray.length === 1) {
    translate(newArray);  
    return result;
  } else {
    for (let i = newArray.length-1; i >= 0; i--) {
        if (newArray[i] === 'hundred' || 
            newArray[i] === 'thousand' || 
            newArray[i] === 'million') {
            translate(newArray);     
            console.log('result',result);
        }
    }
    return;
  };
  */
}



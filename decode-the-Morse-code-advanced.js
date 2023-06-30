/* Decode the Morse code, advanced
 * 4kyu
 *
 * Description:
 
Part of Series 2/3

This kata is part of a series on the Morse code. Make sure you solve the previous part before you try this one. After you solve this kata, you may move to the next one.

In this kata you have to write a Morse code decoder for wired electrical telegraph.

Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

    "Dot" – is 1 time unit long.
    "Dash" – is 3 time units long.
    Pause between dots and dashes in a character – is 1 time unit long.
    Pause between characters inside a word – is 3 time units long.
    Pause between words – is 7 time units long.

However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

    Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).


Eg:
  morseCodes(".--") //to access the morse translation of ".--"

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

After you master this kata, you may try to Decode the Morse code, for real.
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive 0's and 1's
// Results - return human-readable message (two steps - two functions
// Example - see above
// Pseudocode:
// 	decodeBits
// 		split string by six 0's - these are the words
// 		split strings by three 0's - these are the characters
// 		split string by 0's - these are the dots/dashes
// 		iterate over the rest and convert to dot/dash
//
// 	decodeMorse
// 		(use same function from prior version of morse code decoding)

// didn't solve - see my work:

var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    console.log('bit',bits);
    let words = bits.split('000000');
    console.log('words',words);

    let characters = words.map(x => x.split('00'));
    console.log('characters',characters);

    if (characters.length === 1) {
        if ()
    };

    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < characters[i].length; j++) {
            if (characters[i][j] == '11') {
                characters[i][j] = '.'; //dotDash.push('.');
            } else if (characters[i][j] == '111111') {
                characters[i][j] = '-'; // dotDash.push('-');
            } else {

            };
        };
    };

    console.log('second characters',characters);
    characters = characters.map(x => x.join(''));
    console.log('third characters',characters);

    return characters;
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
}

var decodeMorse = function(morseCode){
  console.log('morseCode',morseCode);
  /*
  if (morseCode.length === 1) {
    console.log('triggered');
    return morseCode.map(x => MORSE_CODE[x]);
  }
  */
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    // return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
    let newArray = morseCode;
  console.log('newArray',newArray);
  newArray = newArray.map(x => MORSE_CODE[x] || ' ');
  if (newArray.length === 1) {
      return newArray;
  };
  let result = newArray.join('');
  console.log('result',result);
  result = result.replace(/\s+/g,' ').trim();
  return result;

}

// My favorite solution:
function decodeBits(bits) {
  // Trim zeros
  bits = bits.replace(/(^0+|0+$)/g, '')
  
  // Find transmission rate
  var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function(b) { return b.length }))
  
  // Convert to morse code
  bits = bits
    .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
    .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
    .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
    .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')
  
  return bits
}

function decodeMorse(message) {
  return message
    .replace(/   /g, ' _ ')
    .split(' ')
    .map(function(letter) { return letter === '_' ? ' ' : MORSE_CODE[letter] })
    .join('')
}







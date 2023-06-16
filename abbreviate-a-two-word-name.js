/* Abbreviate a Two Word Name
 * 8kyu
 *
 * Description:
 

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
Strings
Fundamentals
*/

function abbrevName(name){
    name = name.toUpperCase();
    let newArray = name.split(' ');
    return `${newArray[0][0]}.${newArray[1][0]}`;
    //return;
}

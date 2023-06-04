/* int32 to IPv4
 * 5kyu
 *
 * Description:
 

Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
Examples

2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"

Networks
Bits
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive an unsigned 32 bit number
// Results - return it as a string IP address
// Example - 2149583361 -> 128.32.10.1
// Pseudocode:
// 	create temp variable
// 	temp = given variable converted to hex

function int32ToIp(int32){
    let hex = (int32 >>> 0).toString(16).toUpperCase();
    const paddedHex = hex.padStart(8, '0');

    let dec = [paddedHex.substring(0,2), paddedHex.substring(2,4), paddedHex.substring(4,6),
                   paddedHex.substring(6,8)];

    dec = dec.map(x => parseInt(x,16));

    return dec[0] + '.' + dec[1] + '.' + dec[2] + '.' + dec[3];
}

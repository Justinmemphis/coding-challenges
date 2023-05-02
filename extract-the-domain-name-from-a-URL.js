/* Extract the domain name from a URL
 * 5kyu
 *
 * Description:
 

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Parsing
Regular Expressions
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive a string which is a URL
// Results - return just the domain name
// Example - see above
// Pseudocode:
// 	create regex for domain name
// 	return where regex matches string
//
// 	didn't solve - just looked at solutions after 20 minutes

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

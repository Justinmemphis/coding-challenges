/* PaginationHelper
 * 5kyu
 *
 * Description:
 

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

Object-oriented Programming
Arrays
Algorithms
*/

// Solution:
// PREP - Parameters, Results, Example, Pseudocode
// Parameters - receive function definitions
// Results - return certain responses
// Example - see above
// Pseudocode:
// 	constructor
// 	itemCount
// 		number of items = collection.length
// 	pageCount
// 		number of pages = itemCount / itemsPerPage - round up
// 	pageItemCount
// 		create array of valid pageCount
// 		if in valid array
// 			return number
// 		else
// 			return -1
// 	pageIndex
// 		create array of valid pageCount
//
//	ran out of time - used default solution below:


// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage );  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var pagecount = this.pageCount();
  if(pageIndex < 0 || pageIndex >= pagecount) return -1;
  if(pageIndex == pagecount - 1) {
    return this.itemCount() - Math.floor((this.itemCount() / this.itemsPerPage)) * this.itemsPerPage;
  }
  return this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var page = Math.floor(itemIndex / this.itemsPerPage);
  if(page >= this.pageCount() || page < 0)
    return -1;
  return page;
}



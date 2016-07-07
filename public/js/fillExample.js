/**************************************************************
*
* fillExample.js
*
* How to dynamically spawn elements and fill them using create()
* and fill() helper functions
*
***************************************************************/
// Load a sample element into a div that we can copy
var templateDiv = create("elements/sample.html");
// The div we are dynamically creating needs to have the "row" class, so we add that manually
templateDiv.addClass("row");

function addTemplateDiv() {
  // Create a copy of the template div
  var newDiv = templateDiv.clone();
  // Use the 'fill' function to fill any element with the 'data-fill' attribute
  newDiv.fill("title", "A New Div");
  newDiv.fill("subtitle", "This div is being dynamically added");
  newDiv.fill("info", "This row didn't exist in the original html. It was added later.");
  // The 'fill' function can also set an attribute on the target element.
  newDiv.fill("picture", "http://placehold.it/400x400", "src");
  // Add this new div to the container div with the id "dataSection". Don't forget the #
  newDiv.appendTo("#dataSection");
}

$(document).ready(function() {
  // Put your initializer code here
  addTemplateDiv();
});

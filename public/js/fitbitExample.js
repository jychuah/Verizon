/******************************************************
* fitbitExample.js
*
* How to authorize and get data using the fitbit.js
*******************************************************/

// Setup your developer information here.
// Your client_id is issued by Fitbit
// Your callback is the URL of your website
var fitbitConfig = {
  client_id : "227V9Z",
  callback : "https://verizon-demo.firebaseapp.com",
  expires_in : 604800
}
// Initialize the Fitbit API
fitbit.initialize(fitbitConfig);

$(document).ready(function() {
  // When the document loads, tell fitbit.js to scan for any access tokens
  fitbit.checkAuth();

  // Ask fitbit.js if it found authorization
  if (fitbit.isAuth()) {
    // Yay, we are authorized!
  } else {
    // If it didn't, show the authorization button
    $("#fitbitAuth").removeClass("hidden");
    // Set the URL on the authorization button
    $("#fitbitAuth").attr('href', fitbit.getURL());
  }
});

// *** Problem: take a single parameter from the command line, and get a random value from 1-6 for the value of the parameter

// Create a var that gets the users number through process.argv
// slice(2) as process.argv would include the node and filname paths otherwise - as they're [0] & [1] in the array
var userNumber = process.argv.slice(2);

// create a function
function rollDie(){
  // loop through until you hit the userNumber
  for (var i = 1; i <= userNumber; i++) {
    // create a var that randomizes a number from 1-6 for the value of userNumber
    var randomNumber = Math.floor(6 * Math.random()) + 1;
    // print to console
    console.log(randomNumber);
  }
}
// call your function to run
rollDie();

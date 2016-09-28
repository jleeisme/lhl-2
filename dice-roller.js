var userNumber = process.argv.slice(2);
function rollDie(){
  for (var i = 1; i <= userNumber; i++) {
    var randomNumber = Math.floor(6 * Math.random()) + 1;
    console.log(randomNumber);
  }
}
rollDie();

// console.log(userNumber);
// rollDie();

// var userNumber = process.argv
// console.log(userNumber);
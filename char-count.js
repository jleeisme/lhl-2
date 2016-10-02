// call a function countLetters
function countLetters(str) {
  // create letterCount object which populates with letter keys and their count as values
  var letterCount = {},
    stringLength = str.length;
    // split each letter and then loop through in reverse as the output will be exactly as the user has written
  str = str.split('').reverse();
  // while looping in reverse(--), takes the str letters' length and adds 1. Then returns the letterCount
  while (stringLength--) letterCount[str[stringLength]] = letterCount[str[stringLength]] + 1 || 1;
  return letterCount;
}
// ignore white space
console.log(countLetters("some shit".replace(/ /g, '')));



// *** first way that took users input from process.argv
// create var that takes the users input for a string
var userString = process.argv[2];
// var joinString = userString.join(' ');

// call a function countLetters
function countLetters(str) {
  // create letterCount object which populates with letter keys and their count as values
  var letterCount = {},
    stringLength = str.length;
    // split each letter and then loop through in reverse as the output will be exactly as the user has written
  str = str.split('').reverse();
  // while looping in reverse(--), takes the str letters' length and adds 1. Then returns the letterCount
  while (stringLength--) letterCount[str[stringLength]] = letterCount[str[stringLength]] + 1 || 1;
  return letterCount;
}

console.log(countLetters(userString));

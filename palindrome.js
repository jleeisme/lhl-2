// Problem: commented code needs to be debugged in order to properly work. 

// function isPalindrome(str) {
//   var noSpaces = str.split(" ").join("");
//   var mid = Math.floor(noSpaces.length/2);
//   var last = noSpaces.length - 1;

//   for (var i = 0; i < mid; i++) {
//     if (str[i] !== str[last - i]) return false;
//   }
// }

// Test driver code. These should all log true.
// console.log(isPalindrome('p') === true);
// console.log(isPalindrome('foo') === false);
// console.log(isPalindrome('racecar') === true);
// console.log(isPalindrome('Kayak') === true);
// console.log(isPalindrome('a santa at NASA') === true);
// console.log(isPalindrome('live without evil') === false);
// console.log(isPalindrome('just some random words') === false);


function isPalindrome(str) {
  // added a var for str that removes special characters and puts to lower case
  var str = str.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();

  // added .reverse() so string is run in reverse as a palindrome is
  var noSpaces = str.split("").reverse().join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  for (var i = 0; i <= mid; i++) {

    // there was a missing set of {}
    // if characters keep matching, loop continues, otherwise return false
    if (str[i] !== str[last - i]) {
      return false;
    }
  }
  // added return true if string is palindrome
  return true;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
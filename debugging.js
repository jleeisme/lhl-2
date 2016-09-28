// *** this is the error code ***
// function average(list) {
//   var sum = 0;

//   for (var num of list) {
//     sum ++ num;
//   }

//   return sum / list.length;

// console.log(average([3, 5, 7]));

// *** fixed errors ***
function average(list) {
  var sum = 0;

  for (var num of list) {
    sum = num;
  }

  return sum / list.length;
}

console.log(average([3, 5, 7]));

// *** this is the second error code ***
// var input = process.argv[2];

// if (input)
//   console.log(reverse(input));

// function reverse(original) {
//   return orignal.split('').reverseList().join('');
// }

var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');
}
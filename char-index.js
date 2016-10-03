// one way
var str = "scissors";
var letter = /[a-z]/g;
var indices = [];
while (indices = letter.exec(str)) {
  console.log(indices.index);
}

// another way, only indices the given character
function getAllIndices(arr, val) {
  var indices = [], i;
  for(i = 0; i < arr.length; i++) {
    if (arr[i] === val)
      indices.push(i);
  }
  return indices;
}
var str = "scissors and stuff";
console.log(getAllIndices(str, 's'));

// sort of fake indices all characters, but works very simply
var str = "this is not the string you are looking for";

for (var i in str) {
  console.log(i + ": " + str[i]);
}
// var str = "scissors";
// var letter = /[a-z]/g;
// var indices = [];
// while (indices = letter.exec(str)) {
//   console.log(indices.index);
// }

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
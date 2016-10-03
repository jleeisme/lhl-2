// var indices = [];
// var string = ("this is the string".replace(/ /,g ''));
// var element = 'a';
// var idx = string.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = string.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]


// var str = "original equipment manufacturer";

// var s = "equip is at position " + str.indexOf("equip");

// s += "abc is at position " + str.indexOf("abc");

// console.log(s);

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
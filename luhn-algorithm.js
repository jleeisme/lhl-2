function luhn(str) {
  return str.split('').reduceRight(function (prev, curr, idx) {
    if ((idx + 1) % 2 !== 0) {
      curr = (curr * 2).toString().split('').reduce(function (p, c) {
        return Number(p) + Number(c);
      });
  }
    return Number(prev) + Number(curr);
  }) % 10 === 0;
}

// also works

// function luhn(str){
//   return str.split('').reduceRight(function(prev, curr, idx){
//     prev = parseInt(prev, 10);
//     if ((idx + 1) % 2 !== 0) {
//       curr = (curr * 2).toString().split('').reduce(function(p, c){ return parseInt(p, 10) + parseInt(c, 10)});
//     }
//     return prev + parseInt(curr, 10);
//   }) % 10 === 0;
// }

console.log(luhn('4111111111111111'));
console.log(luhn('4111111111111112'));
console.log(luhn('6011111111111117'));
console.log(luhn('4012888888881881'));
console.log(luhn('76009244561'));
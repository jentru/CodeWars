// Description
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) { 
  let sum = 0;
  function reduceToOneInteger(n){
    sum = n.toString().split("").reduce((acc,sum)=> +acc + +sum,0);
    return sum;
  }
  reduceToOneInteger(n);
  return sum.length == 1? sum: reduceToOneInteger(sum) == 1? sum : reduceToOneInteger(sum);
}

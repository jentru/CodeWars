//Description
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let length = num.toString().length;
  let count =0;
  while (length>1){
    num = num.toString().split("").reduce((acc,cur)=> acc*cur,1);
    length = num.toString().length;
    count++;
  }
  return count;
}

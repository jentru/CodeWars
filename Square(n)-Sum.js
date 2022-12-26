//Description

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.length>0? numbers.map(num=> num**2).reduce((a,b)=>a+b): 0;
  
}
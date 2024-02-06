// Description
// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.
// Notes
// Only positive numbers will be passed (N > 0) .
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

// Mathematically written as , P5# = 2310 .
// 3- numPrimorial (6) ==> return (30030)
// Explanation:
// Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

// Mathematically written as , P6# = 30030 .


function numPrimorial(n){
    let prime = [2,3]
    new Array(n).fill(1).map((num,i)=> {prime.push((6*(i+1))-1)
         return (6*(i+1))-1})
    .map(num=> prime.push(num+2))
    
    return prime.filter(num=> num%5!==0).concat([5]).sort((a,b)=> a-b).slice(0,n).reduce((acc,cur)=> acc*cur,1)
}
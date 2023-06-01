//Description
// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

// Here is the algorithm:

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

// 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

function validate(n){
    // use Luhn Algorithm
    // first double every other digit (if odd start doubling at second digit otherwise double starting at first)  
      let numOfDigits = n.toString().length
      if (numOfDigits%2==0){
        n = n.toString().split('').map((el,i)=> i%2 ==0? el= el*2 : el)
      } else {
        n = n.toString().split('').map((el,i)=> i%2 !==0? el= el*2 : el)
      }
    // if resulting number is greater than 9, replace with sum of it's own digit or subtract it by 9
      n = n.map(el=> Number(el)>9? el=Number(el)-9 : Number(el))
    //Sum all of the final digits
      let sum = n.reduce((acc,cur)=> acc+cur,0)
    //take the sum and divide by 10, if remained is 0 then original credit card number is valid
      return sum%10==0? true : false
}
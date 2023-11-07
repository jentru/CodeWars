//Description
// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// n simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    num2= num2.toString().split('').reverse()
    num1= num1.toString().split('').reverse()
    while (num2.length > num1.length){
      num1.push(0)
    } 
    while (num1.length> num2.length){
      num2.push(0)
    }
    return +num1.map((num,i)=> Number(num)+Number(num2[i])).reverse().join('')
}
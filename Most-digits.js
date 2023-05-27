//Description
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array){
    let arrayDigit = array.map(el=> el.toString().length)
    let length = Math.max(...arrayDigit)
    let index = arrayDigit.indexOf(length)
    return array[index]
}
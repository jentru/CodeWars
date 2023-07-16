//Description
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
    let arr = [a]
    let i=1
    while (arr.length <= b-a){
     arr.push(a+i)
      i++
    }
    return arr
}
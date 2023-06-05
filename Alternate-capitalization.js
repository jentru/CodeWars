//Description
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let even = s.split('').map((el,i)=> i%2==0? el=el.toUpperCase() : el).join('')
    let odd = s.split('').map((el,i)=> i%2!==0? el=el.toUpperCase() : el).join('')
    return [even,odd]
}
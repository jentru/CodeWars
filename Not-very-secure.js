//Description
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


function alphanumeric(string){
    if (string.includes(' ')|| string.includes('/')|| string.length<1){
      return false
    } else {
      return string.split('').map(el=> '0123456789'.includes(el) || 'abcdefghijklmnopqrstuvwxyz'.includes(el.toLowerCase())).filter(el=> el==false).length>0? false: true
    }
}
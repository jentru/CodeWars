// Description
// You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

// Return an array containing all the possibilities you can reach substituing the ? for a value.

// Examples
// '101?' -> ['1010', '1011']

// '1?1?' -> ['1010', '1110', '1011', '1111']
// Notes:

// Don't worry about sorting the output.
// Your string will never be empty.

function possibilities(str) {
    let index = str.indexOf('?')
    let zero = str.slice(0,index)+'0'+str.slice(index+1)
    let one = str.slice(0,index)+'1'+str.slice(index+1)
    return str.includes('?')?  possibilities(zero).concat(possibilities(one)) : [str] 
};
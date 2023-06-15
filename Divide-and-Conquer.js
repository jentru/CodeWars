//Description
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.
function divCon(x){
    let string = x.filter(el=> typeof el !== 'number').reduce((acc,cur)=> +acc + +cur,0)
    let nonString = x.filter(el=> typeof el == 'number').reduce((acc,cur)=> acc+cur,0)
    return nonString-string
}
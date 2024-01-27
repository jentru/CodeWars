// Description
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

function ipsBetween(start, end){
    end = end.split('.').reverse()
    return start.split('.').reverse().map((el,i)=> (+end[i]- +el)*(2**(8*i))).reduce((acc,cur)=> acc+cur,0)
}
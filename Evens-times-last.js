// Description
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    return numbers.filter((el,i)=> i%2==0).reduce((acc,cur)=>acc+cur,0)*numbers.slice(-1)
}
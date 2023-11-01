//Description
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    return arr.filter(el=> typeof el !== 'number').length > 0? undefined : arr.reduce((acc,cur)=> cur%2!=0? cur**3+acc : 0+acc,0 ) || 0 
}
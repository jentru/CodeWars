//Description
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
  let missing = 0
  if (Array.isArray(arrayOfArrays)){
    if (arrayOfArrays.length < 1|| arrayOfArrays.includes(null)) {
      return 0
    } else {
      let arrayLengths = arrayOfArrays.map(el=> el.length).sort((a,b)=>a-b)
      if (arrayLengths[0]==0){
        return 0
      }
      missing = new Array(arrayOfArrays.length+1).fill(arrayLengths[0]).map((el,i)=> el+i).reduce((acc,cur)=> acc+cur,0) - arrayLengths.reduce((acc,cur)=>acc+cur,0)
      return missing
    }
  } else {
    return 0
  }

}
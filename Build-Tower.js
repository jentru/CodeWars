//Description
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let total = 2*nFloors-1;
    let arr= [];
    for (let i=1; i<= nFloors; i++){
      if (i==nFloors){
        arr.push('*'.repeat(2*i-1));
      }
      else {
        arr.push(' '.repeat(nFloors-i)+'*'.repeat(2*i-1)+' '.repeat(nFloors-i));
      } 
    }
    return arr;
}
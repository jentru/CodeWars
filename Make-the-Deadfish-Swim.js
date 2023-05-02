//Description
// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse( data )
{
  let val = 0;
  let arr=[];
  data.split('').map(el => {
    el == 'i'? val++ :
    el == 'd'? val-- :
    el == 's'? val=val**2:
    el == 'o'? arr.push(val): val=val;
  })
  return arr;
}
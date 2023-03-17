//Description
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


function findMissingLetter(array)
{
  let alpha = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  array = array.map((letter,index,arr)=> alpha.indexOf(letter)-alpha.indexOf(arr[index+1])==-1? 0: index !== arr.length-1? alpha[alpha.indexOf(letter)+1] : 0);
  return array.filter(element => element !==0).join();
}
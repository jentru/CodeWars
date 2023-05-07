//Description
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let indexOfCap =[];
      word.split('').filter((el,i)=> el == el.toUpperCase()? indexOfCap.push(i): '');
    return indexOfCap;
};
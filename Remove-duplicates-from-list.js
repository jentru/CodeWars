//Description
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let arr=[];
    for (let i=0; i<a.length; i++){
      if (!arr.includes(a[i])){
        arr.push(a[i]);
      }
    };
    return arr;
}
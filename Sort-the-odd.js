//Description
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let odd = array.filter(element => element%2!==0).sort((a,b)=> a-b);
    let count =0;
    return array.map(element => element%2!==0? odd[count++]: element);
}
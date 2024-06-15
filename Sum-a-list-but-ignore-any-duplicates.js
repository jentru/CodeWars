// Description
// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
    return numList.filter((num,i,arr)=> arr.indexOf(num)==arr.lastIndexOf(num)).reduce((acc,cur)=> acc+cur,0)
}
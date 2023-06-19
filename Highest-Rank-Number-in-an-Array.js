//Description
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let count = {}
    let sorted = []
    arr.map(el=> count[el]? count[el]+=1 : count[el]=1)
     for (var num in count){
       sorted.push([Number(num),Number(count[num])])
     }
     sorted.sort((a,b)=> b[0]-a[0]).sort((a,b)=> b[1]-a[1])
     return sorted[0][0]
}
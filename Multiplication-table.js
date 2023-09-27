//Description
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable = function(size) {
    let table = []
    let num = new Array(size).fill(1).map((el,i)=> el=i+1)
    table.push(num)
    for (let i=2; i<=size;i++){
      table.push(num.map(el=> el*i))
    }
    return table
}
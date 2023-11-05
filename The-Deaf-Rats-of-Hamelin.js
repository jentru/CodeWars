//Description
// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
var countDeafRats = function(town) {
    town = town.split('').filter(el=> el != ' ')
    let findP = town.findIndex(el=> el=='P')
    let rightside=[], leftside = []
    town.slice(findP+1).map((el,i,arr)=> i%2 !=0? rightside.push(arr[i-1]+el): '')
    town.slice(0,findP).map((el,i,arr)=> i%2 !=0? leftside.push(arr[i-1]+el): '')
    return leftside.filter(el => el!= '~O').length+rightside.filter(el=> el!= 'O~').length
}
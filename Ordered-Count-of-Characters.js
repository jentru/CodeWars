//Description
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    let count = {}
    let arr = []
    text.split('').map(let=> count[let]? count[let]++:count[let]=1)
    text.split('').map(let=> arr.includes(let)? '': arr.push(let))
    return arr.map(let=> [let,count[let]])
}
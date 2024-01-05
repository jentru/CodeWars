// Description
// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

function longest(str) {
    let index = []
    str.split('').map(char=> char.charCodeAt(0)).forEach((char,i,arr)=> char>=arr[i-1]? '' : index.push(i))
    return index.map((el,i,arr)=> str.slice(el,arr[i+1])).sort((a,b)=> b.length-a.length)[0]
}
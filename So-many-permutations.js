// Description
// n this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

function permutations(string) {
    let shufflings = []
    if (string.length==1){
      return [string[0]]
    }
    for (let i=0; i< string.length; i++){
      let remaining = [...string.slice(i+1), ...string.slice(0,i)]
      let inner = permutations(remaining)
      inner.forEach(char=> shufflings.push(string[i]+char))
    }
      return [...new Set(shufflings)];
}
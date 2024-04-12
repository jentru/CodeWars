// Description
// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

function longestWord(stringOfWords){
    let s = stringOfWords.split(' ')
    let longest = Math.max(...s.map(el=> el.length))
    return s.reverse().find(el=> el.length==longest)
}
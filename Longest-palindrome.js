// Description
// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

function longestPalindrome(str) {
    let count = {}
    let word = ''
    str.toLowerCase().split('').filter(char=> /[a-z0-9]/.test(char)).map(char=> count[char]? count[char]++ : count[char]=1)
    let letters = Object.keys(count)
    let odd =''
    Object.values(count).map((num,i)=> {
      if (num%2==0){
        word+=letters[i].repeat(num)
        count[letters[i]]-=num
      } else {
        let rep = parseInt(num/2)
        if (odd.length==0){
          word+=letters[i]
          odd+=letters[i]
        }
        word+=letters[i].repeat(rep*2)
        count[letters[i]]-=rep*2
      }})
      return word.length
}
// Description
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
    let vowels = 'aeiou'
    let count = s.split('').map(letter=> 
      vowels.includes(letter)? 1 : 0).join('').split('0').filter(el=> el>=1)
   return Math.max(...count.map(el=> el.length));
}
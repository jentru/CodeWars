//Description
// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

function playPass(s, n) {
    s= s.toLowerCase()
    let index = 0
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let final =''
    for (let i=0; i<s.length; i++){
      //shift letter
      if (alpha.includes(s[i])){
        index = alpha.indexOf(s[i]) + n
        index > 25? index= index-26: index=index
        final += alpha[index]
      } 
      //replace digits
      else if (num.includes(s[i])){
        final += (Math.abs(Number(s[i])-9))
      }
      // keep non alphabetic and non digit characters
      else {
        final += s[i]
      }
    }
    //downcase each letter in odd position
    final = final.split('').map((el,i,arr)=> i%2==0? el.toUpperCase() : el).join('')
    //reverse
    return final.split('').reverse().join('')
}
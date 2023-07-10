//Description
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    let num ='01234567890'
    let words = str.split(' ')
    words = words.map((word,i,sentence)=> 
      {let code = word.split('').filter(el=> num.includes(el)).join('')
       let first = String.fromCharCode(Number(code))
       let alpha = word.replace(/[0-9]/g,'' )
       return first+alpha.split('').map((char,i,arr)=> i==0? char=arr.slice(-1): i==arr.length-1? char=arr[0]: char).join('')
      })
    return words.join(' ')
}; 
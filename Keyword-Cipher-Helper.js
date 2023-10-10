//Description
// A keyword cipher is a monoalphabetic cipher which uses a "keyword" to provide encryption. It is somewhat similar to a Caesar cipher.

// In a keyword cipher, repeats of letters in the keyword are removed and the alphabet is reordered such that the letters in the keyword appear first, followed by the rest of the letters in the alphabet in their otherwise usual order.

// E.g. for an uppercase latin alphabet with keyword of "KEYWORD":

// A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z

// becomes:

// K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

// such that:

// cipher.encode('ABCHIJ') == 'KEYABC'
// cipher.decode('KEYABC') == 'ABCHIJ'
// All letters in the keyword will also be in the alphabet. For the purpose of this kata, only the first occurence of a letter in a keyword should be used. Any characters not provided in the alphabet should be left in situ when encoding or decoding.
function KeywordCipher(abc, keyword) {
    let alpha = abc.split('')
    keyword = keyword.split('').filter((ltr,i,arr)=> arr.indexOf(ltr)==i)
    let cipher = keyword
       .concat(abc.split('').filter(ltr=> !keyword.includes(ltr)))
   this.encode = function (str) {
     return str.split('').map(ltr=> {
       let i = alpha.indexOf(ltr)
       return i>=0? cipher[i] : ltr
     }).join('')
   }
   this.decode = function (str) {
     return str.split('').map(ltr=> {
       let i = cipher.indexOf(ltr)
       return i>=0? alpha[i] : ltr
     }).join('')
   }
 }
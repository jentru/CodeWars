// Description
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    let odd =[]
    let even = []
    if (text){
        if (n>0) {
        n--
        text.split('').map((el,i)=> i%2==0? even.push(el): odd.push(el))
        text = odd.concat(even).join('')
        return encrypt(text,n)
      } else {
        return text
      }
    } else {
     return text 
    } 
}
  
function decrypt(encryptedText, n) {
    let odd =[]
    let even = []
    if (n>0) {
      let evenLength= Math.floor(encryptedText.length/2)
      n--
      odd = encryptedText.slice(0,evenLength).split('')
      even = encryptedText.slice(evenLength).split('')
      let text =[]
      let i=0
      while (i<=evenLength){
        if (even[i]) {
            text.push(even[i])
            } 
        if (odd[i]) {
          text.push(odd[i])
        }
        i++
      }
      return decrypt(text.join(''),n)
    } else {
      return encryptedText
    }
}
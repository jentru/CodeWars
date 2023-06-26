//Description
// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].

class CaesarCipher {
    constructor (shift){
      this.shift = shift
    }
    encode(str){
      let alpha = 'abcdefghijklmnopqrstuvwxyz'
      return str.toLowerCase().split('')
        .map( l => 
             {let index = alpha.indexOf(l)+this.shift
             index>25? index=index-26 : index
             return alpha.includes(l)? alpha[index] : l})
        .join('')
        .toUpperCase()
    }
     decode(str){
      let alpha = 'abcdefghijklmnopqrstuvwxyz'
      return str.toLowerCase().split('')
        .map( l => 
             {let index = alpha.indexOf(l)-this.shift
             index<0? index=index+26 : index
             return alpha.includes(l)? alpha[index] : l})
        .join('')
        .toUpperCase()
    }
  
};
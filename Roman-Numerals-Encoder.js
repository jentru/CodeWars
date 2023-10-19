//Description
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.
function solution(number){
    const roman = {
      1 : 'I',
      5 : 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }
    const roman4or9 = {
      4: 'IV',
      9: 'IX',
      40: 'XL',
      90: 'XC',
      400: 'CD',
      900: 'CM'
    }
    let num = Object.keys(roman)
    return number.toString().split('').reverse().map((el,i)=>Number(el)*(10**i)).reverse().map(el=> {
      let digits = num.filter(r=> r.toString().length==el.toString().length)
      if (roman[el] || roman4or9[el]){
        return roman[el] || roman4or9[el]
      } else if (digits[1]<el){
        return roman[digits[1]]+ roman[digits[0]].repeat((el%digits[1])/digits[0])
      }else if (digits[0]<el ){
        return roman[digits[0]].repeat(el/digits[0])
      }
    }).join('')
}
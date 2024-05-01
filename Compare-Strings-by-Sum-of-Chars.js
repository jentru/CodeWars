// Description
// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
    function convert(str){
      if (str == null){
        str = ''
      }
      return str.split('').filter(el=> !el.match(/[a-z]/gi)).length>0? str = 0 : str= [...str].reduce((acc,cur)=> cur.toUpperCase().charCodeAt(0)+acc,0)
    }
    s1 = convert(s1)
    s2 = convert(s2)
    return s1 == s2
}
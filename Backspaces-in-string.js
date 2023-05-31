//Description
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
function cleanString(s) {
  let i
  s = s.split('')
  while (s.join('').includes('#')){
    i = s.indexOf('#')
    s[i-1]=' '
    s[i]=' '
    s= s.filter(el=> el != ' ')
  }
  return s.join('')
}
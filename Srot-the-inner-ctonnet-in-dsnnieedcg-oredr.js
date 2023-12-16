// Description
// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.

// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function sortTheInnerContent(words)
{
  return words.split(' ').map((word,i)=> {
    let length = word.length
    let inner = word.slice(1,length-1).split('').sort((a,b)=> b.charCodeAt(0)-a.charCodeAt(0)).join('')
    return length>3 ? word[0]+inner+word[length-1] : word
  }).join(' ');
}
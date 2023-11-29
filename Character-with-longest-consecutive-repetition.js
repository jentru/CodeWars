// Description 
// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
function longestRepetition(s) {
    if (s.length==0){
      return ["",0]
    }
    let longest = ''
    let temp = ''
    for (let i=0; i<s.length;i++){
      if (temp[0]==s[i]){
        temp +=s[i]
      } else {
        temp = s[i]
      }
      if (temp.length > longest.length){
        longest = temp
      }
    }
    return [longest[0],longest.length]
}
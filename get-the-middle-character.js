//Description
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{ 
  let index;
  if (s.length%2 ==0){
    index = s.length/2;
    return s[index-1]+s[index];
  }
  else {
    index = Math.floor(s.length/2);
    return s[index];
  }
}

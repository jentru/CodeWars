//Description
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
    var seen1 ={};
    for (let i=0; i<str1.length; i++){
      seen1[str1[i]]? seen1[str1[i]]++ : seen1[str1[i]]=1;
    }
    
    var seen2 = {};
    for (let i=0; i<str2.length; i++){
      seen2[str2[i]]? seen2[str2[i]]++ : seen2[str2[i]]=1;
    }
  
    var includesChar ={};
    for (let i=0; i<str2.length; i++){
      seen2[str2[i]]<=seen1[str2[i]]? includesChar[str2[i]]=true: includesChar[str2[i]]=false;
    }
    return Object.values(includesChar).join('').includes(false)? false: true;
}
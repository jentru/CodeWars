//Description
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {

    test = test.toLowerCase().split("").sort().join("");
    original = original.toLowerCase().split("").sort().join("");
    return test===original;
    
    //counting with keys and values from another Coding Challenge Solution-this also should work
  //   test = test.toLowerCase().split("").sort();
  //   original = original.toLowerCase().split("").sort();
  //   var t={}, o={};
  //   test.forEach(function(letter) {
  //     t[letter]? t[letter]=t[letter]+1 :  t[letter]=1;
  //   })
  //   original.forEach(function(letter) {
  //     o[letter]? o[letter]=o[letter]+1 :  o[letter]=1;
  //   })
  //   return JSON.stringify(t) == JSON.stringify(o)
};
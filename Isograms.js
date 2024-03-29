//Description
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    if (str.length == 0){
      return true;
    }
    else{
      let result = true;
    str = str.toLowerCase().split("");
    for (let i=0; i<str.length; i++){
     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
       result = false;
       break;
     }
    }
      return result;
    }
}
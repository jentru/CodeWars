//Description
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index ='';
    let arr =[];
    
   // return letters.split("").indexOf(1);
    for (letter of message){ 
  
        
      index =letters.split("").indexOf(letter);
      if (index>=0 && index<=12){
        index = index+13;
        arr.push(letters[index]);
      }
      else if (index>12 && index<=25){
        index =index-13;
        arr.push(letters[index]);
      }
      else if (index>25 && index<=38){
        index =index+13;      
        arr.push(letters[index]);
      }
      else if (index>38){
        index = index-13;
        arr.push(letters[index]);
      }
      else if (index ==-1){
        arr.push(letter);
      }
        
    }
    return arr.join("");
  }
//Description
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let splitStr = str.split("").map((e,i,a) => i%2 == 0 && i!==a.length-1? a[i]+a[i+1] : " ").filter(element=> element !==" ");
    return str.length%2 ==0? splitStr: splitStr.concat(str[str.length-1]+'_');
    
}
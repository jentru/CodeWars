//Description
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters
function kebabize(str) {
    str=str.split('').filter(el=> 'abcdefghijklmnopqrstuvwxyz'.includes(el.toLowerCase())).join('')
    return str.split('').map((el,i)=> {
      if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 && i!==0){
        el= '-'+el.toLowerCase()
      } else {
        el= el.toLowerCase()
      }
      return el
    })
    .join('')
}
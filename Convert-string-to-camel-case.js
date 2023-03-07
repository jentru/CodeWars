//Description
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
  if (str.length>0) {
    str = str.split("-").join("_");
    str = str.split("_").map((element,index,array) => index>0? element[0].toUpperCase()+element.slice(1): element).join("");
  }
  return str;
}

//Description
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
function removeUrlAnchor(url){
  let anchorIndex = url.split('').findIndex(el=> el=='#');
  
  return anchorIndex >= 0? url.slice(0,anchorIndex) : url;
}
//Directions
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
function dirReduc(arr){
  for (let i=0; i<arr.length-1; i++){
    if (arr[i]+arr[i+1]=="NORTHSOUTH" || arr[i]+arr[i+1]=="SOUTHNORTH" || arr[i]+arr[i+1]=="WESTEAST" || arr[i]+arr[i+1]=="EASTWEST"){
      arr.splice(i,2);
      dirReduc(arr);
    }
  }
  return arr;
}

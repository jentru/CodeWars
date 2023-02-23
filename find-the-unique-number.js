//Description
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  let first = arr.sort().findIndex((element,index,arr) => element==arr[0]);
  let last = arr.sort().findLastIndex((element,index,arr)=> element==arr[0]);

  while (first !==last){
    arr = arr.slice(last+1);
    first = arr.sort().findIndex((element,index,arr) => element==arr[0]);
    last = arr.sort().findLastIndex((element,index,arr)=> element==arr[0]);
    }
  return arr[first];

}

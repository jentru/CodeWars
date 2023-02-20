//Description
//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  return string.split("").map(letter=> upper.includes(letter)? " "+letter: letter).join("");
}

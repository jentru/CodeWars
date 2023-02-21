//Description
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  let firstThree = numbers.slice(0,3).join("");
  let middle = numbers.slice(3,6).join("");
  let lastFour = numbers.slice(6).join("");
  return `(${firstThree}) ${middle}-${lastFour}`
}

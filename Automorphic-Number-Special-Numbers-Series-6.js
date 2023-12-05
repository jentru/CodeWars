//  Description
// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .
// Input >> Output Examples
// autoMorphic (25) -->> return "Automorphic" 
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .
function automorphic(n){
    return +(n**2).toString().slice(-n.toString().length) == n? 'Automorphic' : 'Not!!'
}
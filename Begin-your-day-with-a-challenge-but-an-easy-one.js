//Description
// There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

// one_two_three(0) == [0, 0]
// one_two_three(1) == [1, 1]
// one_two_three(2) == [2, 11]
// one_two_three(3) == [3, 111]
// one_two_three(19) == [991, 1111111111111111111]
// And it should give the following results in Javascript, Scala, D, Go, and Rust:

// oneTwoThree(0) == ['0', '0']
// oneTwoThree(1) == ['1', '1']
// oneTwoThree(3) == ['3', '111']
// oneTwoThree(19) == ['991', '1111111111111111111']
// In C, the results are to be assigned to seperate pointers.

function oneTwoThree(n) {
    let first
    if (n<=9){
      first= n.toString()
    } else if (n>9){
      first = '9'.repeat(parseInt(n/9))
      if (n%9>0){
        first += (n%9).toString()
      }
    }
    let second = new Array(n).fill('1').join('') || '0'
    return [first, second]
}
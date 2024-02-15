// Description
// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

function convertFrac(lst){
    if (lst == []){ return []}
    let lcd
      
  //   Find prime factorials of number given
    function primeFactorials(n){
      let primes = []
        for (let i=2; i<=n; i++){
        while (n%i==0){
          primes.push(i)
          n/=i
        }
      }
      return primes
    }
  //   find denominator factorials
    let denom = lst.map(el=> primeFactorials(el[1]))
    
  //  find set of prime numbers from the denominators (no duplicates) 
    let primes = [...new Set(denom.join().split(','))]
  
  // sometimes one of the denominator is also the lcd (least common denominator)
    let max = lst? Math.max(...lst.map(fract=> fract[1])) : 0
    if (lst.filter(fract=> max%fract[1]==0).length == lst.length){
      lcd = max
    }
  //  if lcd is not one of the denominators, multiply the prime numbers to find lcd (this method is called Prime Factorization)
    else {
      lcd = primes.map(prime=> {
  //     max is the number of times a prime number occurs within one denominator
      max = 1
      denom.map((p)=> {
  //       use the denominator factorials to find the max times the prime number occurs 
        p.filter(_=> _==+prime).length> max? max =p.filter(_=> _==+prime).length : max =1
      })
  //       return the prime number ^ max occurence 
      return (+prime)**max})
        .reduce((acc,cur)=> acc*cur,1)
    }
    
    return lst.map(arr=> arr[0]*lcd/arr[1]).map(top=> {return `(${top},${lcd})`}).join('')
}
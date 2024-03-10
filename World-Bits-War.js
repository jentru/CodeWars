// Description
// Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

function bitsWar(numbers) {
    let even =[], odd =[]
    numbers.map(n=> {
      n%2==0? even.push(n) : odd.push(n) })
    function countBits(arr){
      return arr.map(n=> n.toString(2).replace(/0/g,''))
        .map(n=> n.includes('-')? -1*(n.length-1) : n.length)
        .reduce((acc,cur)=> acc+cur,0) 
    }
    even = countBits(even)
    odd = countBits(odd)
    return even > odd? 'evens win' : even==odd? 'tie': 'odds win'
}
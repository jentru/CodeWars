//Description
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year){
    let thirteenth = new Array(12).fill('').map((el,i)=> new Date(`${year}-${i+1}-13`).getDay() )
    return thirteenth.filter(day=> day==5).length
}
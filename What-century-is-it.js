// Description
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{let century = 0
 year.endsWith('00')? century = +year.slice(0,2) : century = +year.slice(0,2) + 1
 if (century <21 && century >3){
   return century+'th'
 } else if (century.toString().endsWith('1')){
   return century+'st'
 } else if (century.toString().endsWith('2')){
   return century+'nd'
 } else if (century.toString().endsWith('3')){
   return century+'rd'
 } else {
   return century+'th'
 }
}
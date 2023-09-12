//Description
// If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'have', 'heva', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

// Given a string:

// alternate the vowels and consonants and return the lexicographically lowest element in the list
// If any two or more vowels or consonants must follow each other, return "failed"
// if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
// Examples:

// solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
// solve("oruder") = "edorur"
// solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
// Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

// Good luck!

function solve(s) {
    let vowels= s.split('').filter(letter=> 'aeiou'.includes(letter)).sort()
    let consonants = s.split('').filter(letter=> !'aeiou'.includes(letter)).sort()
    if (vowels.length<consonants.length) [vowels,consonants]= [consonants,vowels]
    if (Math.abs(vowels.length-consonants.length)>=2){ return 'failed'}
    return vowels.map((v,i)=> v+ (consonants[i]||'')).join('')
};
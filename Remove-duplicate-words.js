//Description
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
  let seen = {}
  s.split(' ').map(el=> seen[el]? seen[el]++: seen[el]=1);
  return Object.keys(seen).join(' ');
}
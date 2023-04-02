//Description
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    num = num.toString();
    let arr =[];
    for (let i=1; i<=num.length; i++){
      if (num[i-1] !=='0') {
        arr.push(num[i-1]+'0'.repeat(num.length-i));
      }
    }
    return arr.join(' + ')
}
// Description
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left,right){
    let l = [...left].reduce((acc,cur)=> cur=='?'? 3+acc : 2+acc, 0)
    let r = [...right].reduce((acc,cur)=> cur=='?'? 3+acc : 2+acc, 0)
    return l>r? 'Left' : l==r? 'Balance' : 'Right'
}
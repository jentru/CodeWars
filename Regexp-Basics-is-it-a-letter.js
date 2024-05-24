// Description
// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

String.prototype.isLetter = function() {
    return this.match(/[a-z]/gi) && this.length==1? true : false
}
// Description
// In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

// If each angle is less than 90°, this triangle is acute and the function should return 1.

// If one angle is strictly 90°, this triangle is right and the function should return 2.

// If one angle is more than 90°, this triangle is obtuse and the function should return 3.

// If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

// Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).

// Examples:
// (2, 4, 6) ---> return 0 (Not triangle)
// (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
// (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
// If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

// There is a very small chance of random test to fail due to round-off error, in such case resubmit your solution.

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c){
    if (Math.max(a,b,c) >= (a+b+c)-Math.max(a,b,c)){
      return 0
    } 
    let sides = [[a,b,c],[b,c,a],[c,a,b]]
    let angles = sides.map(([s1,s2,s3])=> (s1**2+s2**2-s3**2)/(2*s1*s2)).map(rad=> Math.acos(rad)*180/Math.PI)
    return angles.filter(ang=> ang<90).length ==3? 1 : angles.filter(ang=> ang==90).length ==1? 2 : 3
}
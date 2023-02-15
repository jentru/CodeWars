    //Description    
    // Write function bmi that calculates body mass index (bmi = weight / height2).

    // if bmi <= 18.5 return "Underweight"

    // if bmi <= 25.0 return "Normal"

    // if bmi <= 30.0 return "Overweight"

    // if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmiNum=weight/(height**2);
  return bmiNum<=18.5? "Underweight": bmiNum<= 25? "Normal": bmiNum<=30? "Overweight" : "Obese";
}

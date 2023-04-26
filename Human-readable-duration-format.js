//Description
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    let secs = seconds %60;
    let mins = parseInt(seconds/60)%60;
    let hrs = parseInt(seconds/3600)%(24);
    let days = parseInt((seconds/(3600*24))%(365));
    let yrs = Math.floor(seconds/(3600*24*365));
    
    secs>1? secs = `${secs} seconds` : secs==1? secs= `${secs} second` : secs='';
    mins>1? mins = `${mins} minutes` : mins==1? mins= `${mins} minute` : mins='';
    hrs>1? hrs = `${hrs} hours` : hrs==1? hrs= `${hrs} hour` : hrs='';
    days>1? days = `${days} days` : days==1? days= `${days} day` : days='';
    yrs>1? yrs = `${yrs} years` : yrs==1? yrs= `${yrs} year` : yrs='';
    
    let time = [yrs,days,hrs,mins,secs];
    
    time = time.filter(el=> el !==0 && el !=='');
    
    if (time.length>4){
      return time[0]+', '+time[1]+', '+time[2]+', '+time[3]+' and '+time[4];
    }
    else if (time.length>3){
      return time[0]+', '+time[1]+', '+time[2]+' and '+time[3];
    }
    else if (time.length>2){
      return time[0]+', '+time[1]+' and '+time[2];
    }
    else if (time.length>1){
      return time[0]+' and '+time[1];
    }
    else if(time.length ==1){
      return time[0];
    }
    else {
      return 'now';
    }
    
}
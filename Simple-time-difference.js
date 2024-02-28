// Description
// In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

// For example:
// solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
// solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.
// In the second example, the alarm sounds 4 times in a day.

function solve(arr){
    function convertMin(time){
      return time.split(':').map((t,i)=> i==0? +t*60 : +t).reduce((acc,cur)=> acc+cur,0)
    }
    let duration = arr.map(t=> convertMin(t)).sort((a,b)=>a-b).map((t,i,alarms)=> i !== alarms.length-1? alarms[i+1]-t-1 : convertMin('24:00')-t+(alarms[0])-1)
    let maxDuration = Math.max(...duration)
    let hh = parseInt(maxDuration/60).toString().padStart(2,'0')
    let mm = (maxDuration%60).toString().padStart(2,'0')
    return  `${hh}:${mm}`
  }
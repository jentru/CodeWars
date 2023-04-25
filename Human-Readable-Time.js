//Description
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    let h = Math.floor((seconds/3600)).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
    let m = Math.floor((seconds/60)%60).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
    let s = Math.round(seconds%60).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
    return `${h}:${m}:${s}`;
}
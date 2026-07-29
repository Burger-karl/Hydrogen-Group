/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// ## Problem

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// **Note:**
// - `12:00:00AM` on a 12-hour clock is `00:00:00` on a 24-hour clock.
// - `12:00:00PM` on a 12-hour clock is `12:00:00` on a 24-hour clock.

// ## Example

// ```
// s = "07:05:45PM"
// ```

// Return:

// ```
// "19:05:45"

// ```
// ```
const s = "01:05:45PM";
// function timeConversion(s) {
//   const strippedString = s.slice(0, 8);
//   const timeArray = strippedString.split(":");
//   const newHour = Number(timeArray[0]) + 12;
//   const newTime = newHour + strippedString.slice(2);
//   return newTime;

// }

function timeConversion(s) {
  const amPM = s.slice(-2);
  const strippedString = s.slice(0, -2);
  const timeArray = strippedString.split(":");
  const hour = Number(timeArray[0]);

  let newTime = "";
  if (amPM === "PM" && hour !== 12) {
    newTime = (hour + 12) + strippedString.slice(2);
  } else if (amPM === 'PM' && hour === 12) {
    newTime = "12" + strippedString.slice(2);
  } else if (amPM === 'AM' && hour === 12) {
    newTime = "00" + strippedString.slice(2);
  } else {
    newTime = strippedString;
  }
  
  return newTime;

}

module.exports = timeConversion;

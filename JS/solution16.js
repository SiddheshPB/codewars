// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored)

function cockroachSpeed(s) {
    //   1 = 27.7778
      let cmPerSec = Math.floor(s * 27.7778)
      return parseInt(cmPerSec)
    }
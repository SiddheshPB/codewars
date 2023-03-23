// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



function findAverage(array) {
    // your code here
    let averageArray = array.reduce((a,b) => a+b,0)
    if(averageArray){
      return averageArray/array.length;
    }else{
      return 0
    }
    
  }
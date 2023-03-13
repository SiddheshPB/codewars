// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...


function SeriesSum(n)
{
  for( var sum = 0, i = 0; i < n; i ++){
    sum += 1 / (1 + i * 3)
  }
  return sum.toFixed(2)
}
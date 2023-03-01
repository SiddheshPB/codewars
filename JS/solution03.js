// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str){
//     const noVowel = str.replace(/[aeiou]/gi,"");
//     return noVowel
// }



// Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


function secondlowestAndSecHighest(arr){
    let sorted = arr.sort((a,b) => a-b)
    let sum = sorted[1] + sorted[sorted.length-2]
    alert(sum)
}
secondlowestAndSecHighest([23,43,12,65,78,90])